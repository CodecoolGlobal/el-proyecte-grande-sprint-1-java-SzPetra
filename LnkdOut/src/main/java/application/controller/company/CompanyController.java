package application.controller.company;

import application.model.CompanyModel;
import application.model.StudentModel;
import application.service.CompanyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("company")
public class CompanyController {

    private final CompanyService companyService;


    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @PostMapping(value = "api/add-company")
    public void addCompany(@RequestBody CompanyModel companyModel){
        companyService.addCompany(companyModel);
    }

    @GetMapping(value = "api/get-all")
    public List<CompanyModel> getAllCompany(){
        return companyService.getAllCompany();
    }
}
