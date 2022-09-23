package data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Collection;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "Movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(nullable = false, length = 100)
    private String director;

    @Column(nullable = false, length = 1024)
    private String plot;

    @Column(nullable = false, length = 225)
    private String posterUrl;


    @NotNull
    @Enumerated(EnumType.STRING)
    @Column
    private MovieRating rating;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = Genre.class)

    @JoinTable(
            name = "Genre_Movies",
            joinColumns = {@JoinColumn(name = "Movie_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "Genre_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("Movies")
    private Collection<Genre> Genres;
}
