random_posts_length = rand(14..54)
puts "Creating #{random_posts_length} posts...."

random_posts_length.times.each do | count |

  rand_title_length = rand(2..7)
  rand_paragraph_by_chars_length = rand(38..285)

  fake_title = Faker::Lorem.words(number: rand_title_length)*" "
  fake_body = Faker::Lorem.paragraph_by_chars(number: rand_paragraph_by_chars_length, supplemental: false)

  post = Post.create(title: fake_title.capitalize, body: fake_body)
  puts "Post #{post.id}: \n #{post.inspect} \n"
  puts "*"*40 unless count == random_posts_length
end

puts (("*"*40 + " \n")*3)
puts "Created #{random_posts_length} posts."
puts (("*"*40 + " \n")*3)
