package com.example.back_end.controllers;

import com.example.back_end.dto.ResponseDTO;
import com.example.back_end.entities.BusEntity;
import com.example.back_end.services.impls.BusImplService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(path = "/api/bus")
public class BusController {
    @Autowired
    private BusImplService busImplService;

    @GetMapping(value = "")
    public ResponseEntity<?> index(@RequestParam(value = "keyword", required = false) String keyword) {
        List<BusEntity> ls = busImplService.getListBusByKeyword(keyword);
        ResponseDTO responseDTO = new ResponseDTO();
        if (ls.size() == 0) {
            return ResponseEntity.noContent().build();
        }
        responseDTO.setCode("200");
        responseDTO.setStatus("SUCCESS");
        responseDTO.setMessage("");
        responseDTO.setData(ls);
        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> detail(@PathVariable("id") int id) {
        Optional<BusEntity> op = busImplService.getBusById(id);
        if (op.isPresent()) {
            ResponseDTO responseDTO = new ResponseDTO();
            responseDTO.setCode("200");
            responseDTO.setStatus("SUCCESS");
            responseDTO.setMessage("");
            responseDTO.setData(op.get());
            return ResponseEntity.ok(responseDTO);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping(value = "")
    public ResponseEntity<?> delete(@RequestParam int id) {
        Optional<BusEntity> op = busImplService.getBusById(id);
        if (op.isPresent()) {
            ResponseDTO responseDTO = new ResponseDTO();
            busImplService.deleteBus(op.get());
            responseDTO.setCode("200");
            responseDTO.setStatus("SUCCESS");
            responseDTO.setMessage("Delete bus successfully");
            responseDTO.setData(null);
            return ResponseEntity.ok(responseDTO);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping(value = "")
    public ResponseEntity<?> save(@RequestBody BusEntity bus) {
        ResponseDTO responseDTO = new ResponseDTO();
        busImplService.saveBus(bus);
        responseDTO.setCode("200");
        responseDTO.setStatus("SUCCESS");
        responseDTO.setMessage("Create product successfully");
        responseDTO.setData(bus);
        return ResponseEntity.ok(responseDTO);
    }
}
