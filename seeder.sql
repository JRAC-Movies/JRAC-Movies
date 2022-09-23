use chase;
INSERT INTO Movie(Title, Director, Plot, Rating, PosterUrl)
VALUES ('John Wick', 'Chad Stahelski',
        'Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John''s prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef''s father (Michael Nyqvist) -- John''s former colleague -- puts a huge bounty on John''s head.',
        1, 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg'),
       ('Project X', 'Nima Nourizadeh',
        'Three high school seniors throw a party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.',
        1, 'https://m.media-amazon.com/images/I/51Kkswv-kjL._AC_.jpg'),
       ('Crazy Rich Asians', 'Jon M. Chu',
        'An American-born Chinese economics professor accompanies her boyfriend to Singapore for his best friend''s wedding, only to get thrust into the lives of Asia''s rich and famous.',
        2, '
https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg
'),
       ('Holes', 'Andrew Davis',
        'Stanley''s family is cursed with bad luck. Unfairly sentenced to months of detention at Camp Green Lake, he and his campmates are forced by the warden to dig holes in order to build character. What they don''t know is that they are digging holes in order to search for a lost treasure hidden somewhere in the camp.',
        2, 'https://lumiere-a.akamaihd.net/v1/images/p_holes_19755_8f3e1618.jpeg'),
       ('Nobody', 'Ilya Naishuller',
        'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch''s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',
        1,
        'https://m.media-amazon.com/images/M/MV5BMjNkNWQ4MjktOGI5Mi00YmRjLTk2ZTEtOWU3ZjgwY2ZlMzI5XkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg');

INSERT INTO Rating(Rating)
VALUES ('R'),
       ('PG-13'),
       ('M'),
       ('PG'),
       ('none');

INSERT INTO Genre(Genre)
VALUES ('Horror'),
       ('Comedy'),
       ('Action'),
       ('Thriller'),
       ('Drama');

INSERT INTO Genre_Movies(Movie, Genre)
VALUES (1, 3),
       (1, 4),
       (2, 2),
       (3, 2),
       (3, 5),
       (4, 5),
       (5, 3),
       (5, 4);

