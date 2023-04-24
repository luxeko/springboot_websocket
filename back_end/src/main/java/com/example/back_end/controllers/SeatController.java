package com.example.back_end.controllers;

import com.example.back_end.dto.ResponseDTO;
import com.example.back_end.dto.SeatDTO;
import com.example.back_end.entities.SeatEntity;
import com.example.back_end.services.impls.SeatImplService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(path = "/api/seat")
public class SeatController {
    @Autowired
    private SeatImplService seatImplService;

    @GetMapping(value = "/{busId}")
    public ResponseEntity<?> index(@PathVariable("busId") int busId) {
        List<SeatEntity> lsSeat = seatImplService.getListSeatsByBusId(busId);
        ResponseDTO dto = new ResponseDTO();
        if (lsSeat.size() == 0) {
            return ResponseEntity.noContent().build();
        }
        dto.setCode("200");
        dto.setStatus("SUCCESS");
        dto.setMessage("");
        dto.setData(lsSeat);
        return ResponseEntity.ok(dto);
    }
    @PostMapping(value = "/{busId}")
    @Transactional(rollbackOn = {Exception.class, Throwable.class})
    public ResponseEntity<?> save(@PathVariable("busId") int busId, @RequestBody SeatDTO seatDTO) {
        List<SeatEntity> ls = seatDTO.getLsSeat();
        for (SeatEntity s: ls) {
            SeatEntity seat = new SeatEntity();
            seat.setId(s.getId());
            seat.setSeatCode(s.getSeatCode());
            seat.setIsSeat(s.getIsSeat());
            seat.setFare(s.getFare());
            seat.setRow(s.getRow());
            seat.setColumn(s.getColumn());
            seat.setBusId(busId);
            seatImplService.saveSeat(seat);
        }
        return ResponseEntity.ok(ls);
    }
}
