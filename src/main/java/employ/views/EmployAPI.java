package employ.views;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class EmployAPI {

    @Autowired
    private IEmployService service;

    // GET list (pagination)
    @GetMapping("/list")
    public Page<Employ> getList
    (
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    )
    {
        return service.getList(page, size);
    }

    // POST add
    @PostMapping("/add")
    public Employ add(@RequestBody Employ e) {
        return service.save(e);
    }
}
