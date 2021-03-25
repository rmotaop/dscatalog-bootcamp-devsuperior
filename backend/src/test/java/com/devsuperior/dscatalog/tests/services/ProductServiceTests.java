package com.devsuperior.dscatalog.tests.services;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.PageImpl;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.devsuperior.dscatalog.entities.Product;
import com.devsuperior.dscatalog.repositories.ProductRepository;
import com.devsuperior.dscatalog.services.ProductService;
import com.devsuperior.dscatalog.services.exceptions.DatabaseException;
import com.devsuperior.dscatalog.services.exceptions.ResourceNotFoundException;
import com.devsuperior.dscatalog.tests.factory.ProductFactory;

@ExtendWith(SpringExtension.class)
public class ProductServiceTests {
	
	@InjectMocks
	private ProductService service;
	
	@Mock
	private ProductRepository repository;
	
	
	private long existingId;
	private long nonExistingId;
	private long dependentId;
	private Product product;
	private PageImpl<Product> page;
	
	@BeforeEach
	void setUp() throws Exception {
		existingId = 1L;
		nonExistingId = 1000L;
		dependentId = 4L;
		product = ProductFactory.createProduct();
		page = new PageImpl<>(List.of(product));
		
		when(repository.find(ArgumentMatchers.any(), ArgumentMatchers.anyString(), ArgumentMatchers.any())).thenReturn(page);
		
		when(repository.save(ArgumentMatchers.any())).thenReturn(product);
		
		when(repository.findById(existingId)).thenReturn(Optional.of(product));
		
		when(repository.findById(nonExistingId)).thenReturn(Optional.empty());
		
		doNothing().when(repository).deleteById(existingId);
		
		doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistingId);
		
		doThrow(DataIntegrityViolationException.class).when(repository).deleteById(dependentId);
	}
	
	@Test
	public void deleteShouldThrowDatabaseExceptionWhenDependertId() {
				
		Assertions.assertThrows(DatabaseException.class, () -> {
			service.delete(dependentId);
		});
		//Pode usar colocando Mockito ou deixando statico como no: when ate doThrow, acima.
		Mockito.verify(repository, Mockito.times(1)).deleteById(dependentId);
	}
	
	
	@Test
	public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
				
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(nonExistingId);
		});
		//Pode usar colocando Mockito ou deixando statico como no: doNothing e doThrow, acima.
		Mockito.verify(repository, Mockito.times(1)).deleteById(nonExistingId);
	}
	
	@Test
	public void deleteShouldNothhingWhenIdExists( ) {
				
		Assertions.assertDoesNotThrow( () -> {
			service.delete(existingId);
		});
		//Pode usar colocando Mockito ou deixando statico como no: doNothing e doThrow, acima.
		Mockito.verify(repository, Mockito.times(1)).deleteById(existingId);
	}

}
