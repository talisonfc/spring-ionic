package controller;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import model.Endereco;
import model.Pessoa;
import repository.EnderecoRepository;
import repository.PessoaRepository;
import repository.Repository;

@RestController
@RequestMapping("/endereco")
public class EnderecoController extends Controller<Endereco>{
	
	public EnderecoController(SessionFactory sessionFactory) {
		super(new EnderecoRepository(sessionFactory));
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Endereco> list(){
		return this.repository.list("Endereco");
	}

	@RequestMapping(method=RequestMethod.POST)
	void add(@RequestBody Endereco p) {
		this.repository.add(p);
	}

	@RequestMapping(method=RequestMethod.DELETE)
	void delete(Endereco p) {
		this.repository.delete(p);
	}

	@RequestMapping(method=RequestMethod.PUT)
	void update(@RequestBody Endereco p) {
		this.repository.update(p);
	}
}
