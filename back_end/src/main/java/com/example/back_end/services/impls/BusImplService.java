package com.example.back_end.services.impls;

import com.example.back_end.entities.BusEntity;
import com.example.back_end.repositories.BusRepository;
import com.example.back_end.services.interfaces.IBusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BusImplService implements IBusService {
    @Autowired
    private BusRepository busRepository;
    @Override
    public List<BusEntity> getListBusByKeyword(String keyword) {
        return busRepository.findByQuery(keyword);
    }

    @Override
    public Optional<BusEntity> getBusById(int id) {
        return busRepository.findById(id);
    }

    @Override
    public void saveBus(BusEntity bus) {
        busRepository.save(bus);
    }

    @Override
    public void deleteBus(BusEntity bus) {
        busRepository.delete(bus);
    }
}
