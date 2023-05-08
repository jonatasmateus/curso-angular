package com.jonatas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

import com.jonatas.model.Course;

// @Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    
}
