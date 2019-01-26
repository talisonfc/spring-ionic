package controller;


import java.util.List;

import repository.Repository;

abstract class Controller<T> {
	
	Repository<T> repository;
	
	public Controller(Repository<T> repository) {
		this.repository = repository;
	}
	
	abstract void add(T p);
	
	abstract List<T> list();
	
	abstract void delete(T p);
	
	abstract void update(T p);
}
