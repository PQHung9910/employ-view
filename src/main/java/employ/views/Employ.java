package employ.views;

import jakarta.persistence.*;

@Entity
@Table(name = "employ_list")
public class Employ
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    @Column(name = "\"MaNV\"")
    public String MaNV;

    @Column(name = "\"TenNV\"")
    public String TenNV;

    @Column(name = "\"LidoNghi\"")
    public String LidoNghi;

    @Column(name = "\"SoNgayNghi\"")
    public Integer SoNgayNghi;
}