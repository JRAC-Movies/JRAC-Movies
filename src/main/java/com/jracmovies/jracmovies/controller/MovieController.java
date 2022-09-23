package com.jracmovies.jracmovies.controller;

import com.jracmovies.jracmovies.data.Movie;
import com.jracmovies.jracmovies.repository.GenreRepository;
import com.jracmovies.jracmovies.repository.MoviesRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/movies", produces = "application/json")

public class MovieController {

    private MoviesRepository moviesRepository;
    private GenreRepository genreRepository;

    @GetMapping("")
    public List<Movie> fetchMovies() {
        return moviesRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Movie> fetchMovieById(@PathVariable long id) {
        Optional<Movie> optionalMovie = moviesRepository.findById(id);
        if(optionalMovie.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Post id " + id + " not found");
        }
        return optionalMovie;
    }

}
