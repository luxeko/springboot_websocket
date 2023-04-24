package com.example.back_end.dto;

import com.example.back_end.entities.SeatEntity;

import java.util.List;

public class SeatDTO {
    private List<SeatEntity> lsSeat;

    public List<SeatEntity> getLsSeat() {
        return lsSeat;
    }

    public void setLsSeat(List<SeatEntity> lsSeat) {
        this.lsSeat = lsSeat;
    }
}
