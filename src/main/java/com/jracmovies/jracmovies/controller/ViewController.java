package com.jracmovies.jracmovies.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {
    @RequestMapping({"/movies"})
    public String showView() {
        return "forward:/index.html";
    }
}