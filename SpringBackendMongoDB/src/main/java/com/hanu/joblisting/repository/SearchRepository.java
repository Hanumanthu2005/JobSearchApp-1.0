package com.hanu.joblisting.repository;

import com.hanu.joblisting.model.Post;

import java.util.List;

public interface SearchRepository {

    List<Post> findByText(String text);

}
