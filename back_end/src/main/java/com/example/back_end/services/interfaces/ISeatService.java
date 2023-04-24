package com.example.back_end.services.interfaces;

import com.example.back_end.entities.SeatEntity;

import java.util.List;

public interface ISeatService {
    public List<SeatEntity> getListSeatsByBusId(int busId);
    public void saveSeat(SeatEntity seat);
    public void deleteSeat(SeatEntity seat);
}
