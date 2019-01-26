package repository;

import org.hibernate.SessionFactory;

import model.Endereco;

public class EnderecoRepository extends Repository<Endereco>{

	public EnderecoRepository(SessionFactory sessionFactory) {
		super(sessionFactory);
	}
	
}
