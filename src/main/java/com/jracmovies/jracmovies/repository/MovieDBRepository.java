package com.jracmovies.jracmovies.repository;

import com.jracmovies.jracmovies.data.MovieDB;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieDBRepository extends JpaRepository<MovieDB, Long> {

}
