package com.jracmovies.jracmovies.controller;

import com.jracmovies.jracmovies.data.MovieDB;
import com.jracmovies.jracmovies.repository.MovieDBRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/moviesDB", produces = "application/json")
public class MovieDBController {
    private MovieDBRepository movieDBRepository;

    @GetMapping("")
    public List<MovieDB> fetchMovieDB() {
        return movieDBRepository.findAll();
    }
}
