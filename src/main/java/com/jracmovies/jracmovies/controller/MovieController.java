package com.jracmovies.jracmovies.controller;

import com.jracmovies.jracmovies.data.Movie;
import com.jracmovies.jracmovies.misc.FieldHelper;
import com.jracmovies.jracmovies.repository.GenreRepository;
import com.jracmovies.jracmovies.repository.MoviesRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
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
        if (optionalMovie.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Post id " + id + " not found");
        }
        return optionalMovie;
    }

    @PostMapping("/create")
    public void createMovie(@RequestBody Movie newMovie) {
        if (newMovie.getTitle() == null || newMovie.getTitle().length() < 1) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Title cannot be blank!");
        }

        moviesRepository.save(newMovie);

    }

    @DeleteMapping("/{id}")
    public void deletePostById(@PathVariable long id) {
        Optional<Movie> optionalMovie = moviesRepository.findById(id);
        if (optionalMovie.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie id " + id + " not found");
        }
        moviesRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public void updateMovie(@RequestBody Movie updatedMovie, @PathVariable long id) {
        Optional<Movie> optionalMovie = moviesRepository.findById(id);
        if (optionalMovie.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie " + id + " not found");
        }
        Movie originalMovie = optionalMovie.get();

        // in case id is not in the request body (i.e., updatedPost), set it
        // with the path variable id
        updatedMovie.setId(id);

        // copy any new field values FROM updatedPost TO originalPost
        BeanUtils.copyProperties(updatedMovie, originalMovie, FieldHelper.getNullPropertyNames(updatedMovie));

        moviesRepository.save(originalMovie);
    }

}
