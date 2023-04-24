package com.example.back_end.repositories;

import com.example.back_end.entities.BusEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BusRepository extends JpaRepository<BusEntity, Integer> {
    @Query("SELECT b from bus b where concat(b.id, b.busName, b.licensePlates, b.seatQuantity) like %?1%")
    public List<BusEntity> findByQuery(String keyword);
}
