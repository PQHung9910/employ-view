package employ.views;

import jakarta.persistence.*;

@Entity
@Table(name = "employ_list")
public class Employ {

    @Id
    @Column(name = "\"maNV\"")
    public String maNV;

    @Column(name = "\"tenNV\"")
    public String tenNV;

    @Column(name = "\"lidoNghi\"")
    public String lidoNghi;

    @Column(name = "\"soNgayNghi\"")
    public Integer soNgayNghi;

    @Column(name = "id")
    private Integer id;
}