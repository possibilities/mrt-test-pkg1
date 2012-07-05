This is a smart package used for testing mrt

This package outputs a line of text to the stdout on the server which is used by the test suite to verify installation

There are 4 branches

  * A master branch for for testing a smart package repo without specifying branch/tag/ref
  
    * Output: Test package 1: branch/master

  * A branch called `test-branch` to test pointing to a branch in a smart package repo

    * Output: Test package 1: branch/test-branch

  * A branch called `test-tag` with a tag called `test-tag-1` to test pointing to a tag in a smart package repo

    * Output: Test package 1: tag/test-tag

  * A branch called `test-ref` to test pointing to a specific commit in a smart package repo

    * Output: Test package 1: ref
