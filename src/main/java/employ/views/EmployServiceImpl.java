package employ.views;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

@Service
public class EmployServiceImpl implements IEmployService {

    @Autowired
    private EmployRepository repo;

    @Override
    public Page<Employ> getList(int page, int size) {
        return repo.findAll(PageRequest.of(page, size));
    }

    @Override
    public Employ save(Employ e) {
        return repo.save(e);
    }
}