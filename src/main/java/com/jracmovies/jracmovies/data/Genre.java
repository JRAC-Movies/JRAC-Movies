package com.jracmovies.jracmovies.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Collection;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="Genre")
public class Genre {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String genre;
//    roger comment

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = Movie.class)
//    might need to change Genre.class to Movie.class
    @JoinTable(
            name="Genre_Movies",
            joinColumns = {@JoinColumn(name = "Genre_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="Movie_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("genre")
    @ToString.Exclude
    private Collection<Movie> movies;
}


