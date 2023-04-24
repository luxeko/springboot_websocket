package com.example.back_end.entities;

import javax.persistence.*;
import java.util.Objects;

@Entity(name = "seats")
@Table(name = "seats", schema = "bus_system", catalog = "")
public class SeatEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "bus_id")
    private int busId;
    @Basic
    @Column(name = "seat_code")
    private String seatCode;
    @Basic
    @Column(name = "is_seat")
    private Byte isSeat;
    @Basic
    @Column(name = "row")
    private Integer row;
    @Basic
    @Column(name = "column")
    private Integer column;
    @Basic
    @Column(name = "fare")
    private Double fare;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBusId() {
        return busId;
    }

    public void setBusId(int busId) {
        this.busId = busId;
    }

    public String getSeatCode() {
        return seatCode;
    }

    public void setSeatCode(String seatCode) {
        this.seatCode = seatCode;
    }

    public Byte getIsSeat() {
        return isSeat;
    }

    public void setIsSeat(Byte isSeat) {
        this.isSeat = isSeat;
    }

    public Integer getRow() {
        return row;
    }

    public void setRow(Integer row) {
        this.row = row;
    }

    public Integer getColumn() {
        return column;
    }

    public void setColumn(Integer column) {
        this.column = column;
    }

    public Double getFare() {
        return fare;
    }

    public void setFare(Double fare) {
        this.fare = fare;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SeatEntity that = (SeatEntity) o;
        return id == that.id && busId == that.busId && Objects.equals(seatCode, that.seatCode) && Objects.equals(isSeat, that.isSeat) && Objects.equals(row, that.row) && Objects.equals(column, that.column) && Objects.equals(fare, that.fare);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, busId, seatCode, isSeat, row, column, fare);
    }
}
