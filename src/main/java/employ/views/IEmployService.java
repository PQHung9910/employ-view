package employ.views;

import org.springframework.data.domain.Page;

public interface IEmployService
{
    Page<Employ> getList(int page, int size);

    Employ save(Employ e);
}
