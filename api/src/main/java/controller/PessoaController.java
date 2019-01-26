package controller;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import model.Pessoa;
import repository.PessoaRepository;

@RestController
@RequestMapping("/pessoa")
public class PessoaController extends Controller<Pessoa>{
	
	@Autowired
	public PessoaController(SessionFactory sessionFactory) {
		super(new PessoaRepository(sessionFactory));
	}
	
	@RequestMapping(method=RequestMethod.POST, headers = {"content-type=application/json"})
	public void add(@RequestBody Pessoa p) {
		this.repository.add(p);
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Pessoa> list(){
		return this.repository.list("Pessoa");
	}
	
	@RequestMapping(method=RequestMethod.DELETE)
	public void delete(Pessoa p) {
		this.repository.delete(p);
	}
	
	@RequestMapping(method=RequestMethod.PUT, headers = {"content-type=application/json"})
	public void update(@RequestBody Pessoa p) {
		this.repository.update(p);
	}
	
}
