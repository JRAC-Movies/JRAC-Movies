package data;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "rating")
public class Rating {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

@Column(nullable = false)
    private String rating;
}
