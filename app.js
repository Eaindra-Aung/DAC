import { select } from 'd3-selection';

const AVATAR_WIDTH = 80;
const avatarRadius = AVATAR_WIDTH / 2;
const svg = select('.my-container');
const defs = this.svg.append("defs");
defs.append("clipPath")
  .attr("id", "avatar-clip")
  .append("circle")
  .attr("cx", avatarRadius)
  .attr("cy", avatarRadius)
  .attr("r", avatarRadius)
svg.append("image")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", AVATAR_WIDTH)
  .attr("height", AVATAR_WIDTH)
  .attr("xlink:href", myAvatarUrl)
  .attr("clip-path", "url(#avatar-clip)")
  .attr("transform", "translate(posx, posy)")
  .append('My username');
        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [5, 25, 50, 75, 100],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
                
              }
            }
          }
        });
  