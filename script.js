const upcoming_shows_summary = document.getElementById("upcoming-shows-summary")
const upcoming_shows_count = document.querySelectorAll("#upcoming-shows > li").length
upcoming_shows_summary.append(" (" + upcoming_shows_count + " Total)")

const past_shows_summary = document.getElementById("past-shows-summary")
const past_shows_count = document.querySelectorAll("#past-shows > li").length
past_shows_summary.append(" (" + past_shows_count + " Total)")

const song_list_summary = document.getElementById("song-list-summary")
const song_list_count = document.querySelectorAll("#song-list > dt").length
song_list_summary.append(" (" + song_list_count + " Total)")