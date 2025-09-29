import Person from './Person.jsx';

const people = [
  {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
    description:
      "Hedy Lamarr, born Hedwig Eva Maria Kiesler on November 9, 1914, in Vienna, Austria-Hungary, was an Austrian-American actress and inventor who became a prominent figure in Hollywood's Golden Age and a pioneering innovator in wireless communication technology. She gained international fame and notoriety for her role in the 1933 Czech film Ecstasy (known as Extase in German), which featured a brief nude scene and a close-up of her face in the throes of orgasm, making it the first feature film to include such imagery. This film, while celebrated in Europe, was banned in the United States and Germany due to its perceived sexual content.",
  },

  {
    name: 'Charles Bukowski',
    imageUrl:
      'https://cms.anagrama-ed.es/uploads/media/autores/0001/29/thumb_28684_autores_big.jpeg',
    imageSize: 90,
    description:
      "Charles Bukowski, born Heinrich Karl Bukowski on August 16, 1920, in Andernach, Germany, was a German-American poet, novelist, and short story writer who became a prominent figure in American literature. He moved to the United States with his family at the age of three and grew up in Los Angeles, which became the central setting for much of his work. His writing, often characterized by its raw, direct language and graphic depictions of violence, sex, alcohol abuse, and the struggles of the downtrodden, earned him the title of 'laureate of American lowlife'. His work frequently featured a semi-autobiographical alter-ego named Henry Chinaski, reflecting his own experiences as a working-class man enduring poverty, abuse, and societal neglect.",
  },
];

function MyApp() {
  return (
    <main>
      {people.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </main>
  );
}

export default MyApp;
