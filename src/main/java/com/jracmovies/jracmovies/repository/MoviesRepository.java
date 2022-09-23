package com.jracmovies.jracmovies.repository;

import com.jracmovies.jracmovies.data.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoviesRepository extends JpaRepository<Movie, Long> {
}
