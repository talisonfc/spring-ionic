package repository;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import model.Pessoa;

public class Repository<T> {
	
	SessionFactory sessionFactory;
	
	public Repository(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	public void add(T obj) {
		Session session = this.sessionFactory.openSession();
		session.beginTransaction();
		session.save(obj);
		session.getTransaction().commit();
		session.clear();
	}
	
	public void delete(T obj) {
		Session session = this.sessionFactory.openSession();
		session.beginTransaction();
		session.delete(obj);
		session.getTransaction().commit();
		session.clear();
	}
	
	public List<T> list(String entityName){
		Session session = this.sessionFactory.openSession();
		session.beginTransaction();
		List<Pessoa> lista = session.createQuery("from "+entityName).list();
		session.getTransaction().commit();
		session.clear();
		return (List<T>) lista;
	}
	
	public void update(T obj) {
		Session session = this.sessionFactory.openSession();
		session.beginTransaction();
		session.update(obj);
		session.getTransaction().commit();
		session.clear();
	}
	
}
