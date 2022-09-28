package application.controller.company;

import application.model.CompanyModel;
import application.service.CompanyService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("company")
public class CompanyController {

    private final CompanyService companyService;


    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @PostMapping(value = "/register")
    public void registerCompany(@RequestBody CompanyModel companyModel){
        companyService.registerCompany(companyModel);
    }

    @GetMapping(value = "api/get-all")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_STUDENT')")
    public List<CompanyModel> getAllCompany(){
        return companyService.getAllCompany();
    }

    @GetMapping(value = "profile/{id}")
    @ResponseBody
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_COMPANY')")
    public CompanyModel getCompanyById(@PathVariable int id) {
        return companyService.getCompanyById(id);
    }

    @PostMapping(value = "add-favorite-student/{companyId}")
    @ResponseBody
    public void addFavoriteStudent(@PathVariable int companyId, @RequestBody int studentId) {
        companyService.addFavoriteStudent(companyId, studentId);
    }
}
