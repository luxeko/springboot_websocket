package com.example.back_end.entities;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity(name = "bus")
@Table(name = "bus", schema = "bus_system", catalog = "")
public class BusEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "bus_name")
    private String busName;
    @Basic
    @Column(name = "license_plates")
    private String licensePlates;
    @Basic
    @Column(name = "seat_quantity")
    private int seatQuantity;
    @Basic
    @Column(name = "created_at")
    private Date createdAt;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBusName() {
        return busName;
    }

    public void setBusName(String busName) {
        this.busName = busName;
    }

    public String getLicensePlates() {
        return licensePlates;
    }

    public void setLicensePlates(String licensePlates) {
        this.licensePlates = licensePlates;
    }

    public int getSeatQuantity() {
        return seatQuantity;
    }

    public void setSeatQuantity(int seatQuantity) {
        this.seatQuantity = seatQuantity;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BusEntity busEntity = (BusEntity) o;
        return id == busEntity.id && Objects.equals(busName, busEntity.busName) && Objects.equals(licensePlates, busEntity.licensePlates) && Objects.equals(seatQuantity, busEntity.seatQuantity) && Objects.equals(createdAt, busEntity.createdAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, busName, licensePlates, seatQuantity, createdAt);
    }
}
