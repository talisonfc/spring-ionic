package repository;

import org.hibernate.SessionFactory;

import model.Pessoa;

public class PessoaRepository extends Repository<Pessoa>{
	
	public PessoaRepository(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
}
