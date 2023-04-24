package com.example.back_end.repositories;

import com.example.back_end.entities.SeatEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeatRepository extends JpaRepository<SeatEntity, Integer> {
    public List<SeatEntity> findSeatEntitiesByBusId(int busId);
}
