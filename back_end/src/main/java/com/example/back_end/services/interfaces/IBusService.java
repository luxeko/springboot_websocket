package com.example.back_end.services.interfaces;

import com.example.back_end.entities.BusEntity;

import java.util.List;
import java.util.Optional;

public interface IBusService {
    public List<BusEntity> getListBusByKeyword(String keyword);
    public Optional<BusEntity> getBusById(int id);
    public void saveBus(BusEntity bus);
    public void deleteBus(BusEntity bus);
}
