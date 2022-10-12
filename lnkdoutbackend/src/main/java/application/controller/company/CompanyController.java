package application.controller.company;

import application.model.CompanyModel;
import application.model.JobModel;
import application.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("company")
public class CompanyController {

    private final CompanyService companyService;



    @Autowired
    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @PostMapping
    public void registerCompany(@RequestBody CompanyModel companyModel){
        companyService.registerCompany(companyModel);
    }

    @GetMapping
    // @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_STUDENT')")
    public List<CompanyModel> getAllCompany(){
        return companyService.getAllCompany();
    }

    @GetMapping(value = "{id}")
    @ResponseBody
    public CompanyModel getCompanyById(@PathVariable int id) {
        return companyService.getCompanyById(id);
    }

    @PostMapping(value = "add-favorite-student/{companyId}")
    @ResponseBody
    public void addFavoriteStudent(@PathVariable int companyId, @RequestBody int studentId) {
        companyService.addFavoriteStudent(companyId, studentId);
    }
}
