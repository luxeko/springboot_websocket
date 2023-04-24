package com.example.back_end.services.impls;

import com.example.back_end.entities.SeatEntity;
import com.example.back_end.repositories.SeatRepository;
import com.example.back_end.services.interfaces.ISeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class SeatImplService implements ISeatService {
    @Autowired
    private SeatRepository seatRepository;

    @Override
    public List<SeatEntity> getListSeatsByBusId(int busId) {
        return seatRepository.findSeatEntitiesByBusId(busId);
    }

    @Override
    public void saveSeat(SeatEntity seat) {
        seatRepository.save(seat);
    }

    @Override
    public void deleteSeat(SeatEntity seat) {
        seatRepository.delete(seat);
    }
}
