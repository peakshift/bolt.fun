# BOLT.FUN

Template by the [Bitcoin Design Community](https://github.com/BitcoinDesign)

Website: https://guide.bolt.fun/

## How to build and run the site locally

You'll want to run the site locally to test your changes.

**Make sure you have Ruby and Bundler installed:**

1. Check that Ruby is installed (check with `ruby -v`). Must be 2.2.5 or higher. Install instructions can be found at https://www.ruby-lang.org/en/documentation/installation/.
2. If you don't already have Bundler (check with `which bundle`), you can install by following the instructions at https://bundler.io.

**Clone the source code, build, and serve:**

3. Clone this repository and `cd` into it.
4. Run `bundle install`
5. Run `bundle exec jekyll serve`
6. Browse the site at http://127.0.0.1:4000/

To test your HTML for errors, run the rake script via `rake test`.

**Docker**
You can also run site locally with Docker.

1. [Install docker](https://www.docker.com/products/docker-desktop)
2. `cd` into a directory, for example `cd Documents/bolt.fun`
3. Run `docker-compose up` (you may need to wait for 5-10 minutes)
