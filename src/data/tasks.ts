import { uniqueId } from 'lodash';

const tasks = [
  {
    id: uniqueId(),
    title: 'Express Myself',
    description: 'Set the building on fire.',
    status: 'To Do',
    assignee: 'Lyla Harper',
  },
  {
    id: uniqueId(),
    title: 'Catch Up Work - Saturday',
    description: 'Gonna need you to come into work on Saturday',
    status: 'In Progress',
    assignee: 'Hayes Aguirre',
  },
  {
    id: uniqueId(),
    title: 'Catch Up Work - Sunday',
    description: 'Gonna need you to come into work on Sunday too.',
    status: 'In Progress',
    assignee: 'Ariah Koch',
  },
  {
    id: uniqueId(),
    title: 'TPS Reports',
    description: 'Did you get the memo?',
    status: 'Done',
    assignee: 'Salvador Vega',
  },
  {
    id: uniqueId(),
    title: 'Buy some more "Flare"',
    description: 'Apparently, 13 is not the minimum number of Flare.',
    status: 'Done',
    assignee: 'Dakota Calhoun',
  },
  {
    id: uniqueId(),
    title: 'Move desk into storage room B',
    description:
      "See if you can take care of some of the rat problem while you're down here.",
    status: 'Done',
    assignee: 'Gary Crane',
  },
];

export default tasks;
