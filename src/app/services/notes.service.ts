import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = [
    {
      id: '02ea161d-c4d7-4ff9-93ac-61b33ed7be99',
      title: 'in aliquam voluptatem',
      content:
        'Ad perspiciatis a maiores et eos repudiandae officiis et rerum.',
      date: 'Sun Aug 18 2024 08:01:43 GMT-0400 (Bolivia Time)',
    },
    {
      id: '9ea2e13f-1373-49e0-8f3a-fe2e643adfe0',
      title: 'expedita quisquam nemo',
      content: 'Atque qui nulla dolores unde.',
      date: 'Wed Jan 17 2024 20:56:05 GMT-0400 (Bolivia Time)',
    },
    {
      id: '31d718c2-3f93-4bbc-9c83-dd9873416982',
      title: 'at voluptatum similique',
      content: 'Magni est vitae totam aliquam fugiat vel.',
      date: 'Sat Nov 16 2024 14:35:42 GMT-0400 (Bolivia Time)',
    },
    {
      id: 'ef76b59e-c2df-4638-a7ea-7b7dbe7ce9b8',
      title: 'dolorem quibusdam et',
      content:
        'Rerum provident magni nihil saepe consequatur ratione voluptas voluptatem autem.',
      date: 'Sat Dec 23 2023 15:34:26 GMT-0400 (Bolivia Time)',
    },
    {
      id: '6b2f7c0e-9661-4c1e-a10e-46ff2be1dcee',
      title: 'sit earum fugiat',
      content: 'Occaecati voluptatem fugiat expedita.',
      date: 'Sat Aug 31 2024 04:03:11 GMT-0400 (Bolivia Time)',
    },
    {
      id: '1ca8daac-44a5-4e42-9b88-dcec648f479b',
      title: 'mollitia consequuntur dolore',
      content: 'Numquam officiis fugit nisi cum.',
      date: 'Wed Dec 20 2023 23:39:45 GMT-0400 (Bolivia Time)',
    },
    {
      id: 'b1c677c1-8296-497a-8181-073d4b279c78',
      title: 'pariatur et consequatur',
      content: 'Qui omnis perspiciatis dignissimos fugiat.',
      date: 'Mon Sep 09 2024 15:00:09 GMT-0400 (Bolivia Time)',
    },
    {
      id: '11810e42-5c68-49d5-b08c-75259a4c35ff',
      title: 'nisi a et',
      content:
        'Fuga est autem aliquam sit est excepturi itaque voluptatibus modi.',
      date: 'Mon Mar 25 2024 22:12:06 GMT-0400 (Bolivia Time)',
    },
    {
      id: '374a82a5-a18d-43a0-8f21-078575a4ab2c',
      title: 'iusto incidunt sed',
      content: 'Deserunt quis iste ut perspiciatis explicabo possimus ut.',
      date: 'Sun May 12 2024 17:52:42 GMT-0400 (Bolivia Time)',
    },
    {
      id: '5d583a7d-ff90-46e6-9d9b-ad8757a2b94f',
      title: 'optio quo mollitia',
      content: 'Est dolores quia.',
      date: 'Wed Jun 19 2024 18:29:20 GMT-0400 (Bolivia Time)',
    },
    {
      id: '03642d7a-5dbf-4e3a-866c-a760cbbe13a8',
      title: 'explicabo non sed',
      content: 'Id molestiae dignissimos voluptatibus.',
      date: 'Thu Dec 07 2023 10:25:08 GMT-0400 (Bolivia Time)',
    },
    {
      id: 'dc9a93a6-8fe2-4ad6-aa8a-aff3c208eb43',
      title: 'accusantium molestiae exercitationem',
      content: 'Quo neque repellat reprehenderit tempora fuga omnis.',
      date: 'Wed Jun 12 2024 15:38:28 GMT-0400 (Bolivia Time)',
    },
    {
      id: 'cb6990b2-cf96-4240-ac46-e8985763becd',
      title: 'eligendi et minima',
      content: 'Ad ut repellat.',
      date: 'Tue Oct 08 2024 21:31:58 GMT-0400 (Bolivia Time)',
    },
  ];

  createNote(note: Partial<Note>) {
    const newNote: Note = {
      id: (this.notes.length + 1).toString(),
      title: note.title ?? '',
      content: note.content ?? '',
      date: new Date().toString(),
    };

    this.notes.push(newNote);
  }

  deleteNote(noteId: string): Note[] {
    this.notes = this.notes.filter((note) => {
      return note.id !== noteId;
    });
    return this.notes;
  }

  selectNote(noteId: string): Note | undefined {
    return this.notes.find((note) => note.id === noteId);
  }
}
