import type { Story, StoryChapter } from '../types/story';

export const SAMPLE_STORIES: Story[] = [
  {
    id: 'sample-the-words-i-couldnt-say',
    title: 'The Words I Couldn’t Say',
    authorName: 'LoveStorya Originals',
    description:
      'A careless boy hurts the new girl by the window. Years of small choices, honest apologies, and an unexpected rival teach them both how to listen.',
    genre: 'Romance',
    credits: 'Original story written for the LoveStorya starter library.',
    updatedAt: 2,
  },
  {
    id: 'sample-kusina',
    title: 'Bawal Mahulog sa Kusina',
    authorName: 'LoveStorya Originals',
    description:
      'Isang event planner at isang mapang-asar na chef ang nagbanggaan sa lumang hotel sa Maynila. Habang nagliliyab ang kusina sa init, selos, at tukso, kailangan nilang magpasya kung negosyo lang ba ang namamagitan—o may mas masarap na posibilidad.',
    genre: 'Romance',
    credits:
      'Orihinal na kuwentong Tagalog para sa LoveStorya. Mga tauhan ay pawang nasa hustong gulang.',
    updatedAt: 3,
  },
  {
    id: 'sample-finally',
    title: 'When We Finally Meet',
    authorName: 'LoveStorya Originals',
    description:
      'joff from Mindanao meets hanie from Visayas on a dating app. What begins with unanswered messages and a Mobile Legends invitation grows into two years of long-distance love, little misunderstandings, hard-earned patience, and a first meeting they are still saving for.',
    genre: 'Romance',
    credits:
      'An original, romanticized English story based on details shared by the storyteller. Some scenes are fictionalized.',
    updatedAt: 4,
  },
  {
    id: 'sample-read-me-when-you-need-me',
    title: 'Read This When You Need Me',
    authorName: 'Joff',
    description:
      'A little book of letters for Mia: for the days you miss me, feel overwhelmed, overthink, or simply need a reminder that you are loved—even from far away.',
    genre: 'Letters',
    credits: 'Personal letters from joff to hanie.',
    updatedAt: 5,
  },
];

export const SAMPLE_STORY_CHAPTERS: Record<string, StoryChapter[]> = {
  'sample-the-words-i-couldnt-say': [
    {
      id: 'words-i-couldnt-say-1',
      title: 'The Girl by the Window',
      order: 1,
      content: `Ethan's POV

I never liked Mondays.

Not because of the early morning classes or the mountains of assignments waiting on my desk. I simply hated the feeling of having to start another week pretending that everything was okay.

“ETHAN!”

I almost dropped my phone.

Marcus stood outside my bedroom, looking like he was about to commit a crime.

“You’re late!”

I glanced at the clock. 7:32 AM. Our class started at 7:30.

“Damn it!”

I grabbed my backpack, shoved my notebook inside, and ran downstairs without even finishing my breakfast.

“At least eat something!” Mom shouted.

“Later!”

That was how my Monday began. And I had no idea that one ordinary morning would change everything.

The classroom was already noisy when I arrived. Students were talking, laughing, and throwing paper balls at each other. Marcus was sitting on top of his desk, laughing at something on his phone.

“Look who’s finally alive,” he said.

“Shut up.”

I dropped my bag onto my chair. Then I noticed someone sitting beside the window.

A girl.

She wasn’t talking to anyone. Instead, she was writing something in a small notebook. Her hair was shoulder-length, and a few strands covered her face. A small hearing aid rested behind her ear.

I stared for a moment.

“Who’s that?” I asked.

Marcus followed my gaze. “Oh, her? New student. Mia, I think.”

“Mia?”

“Yeah. Apparently, she transferred here last week.”

Before I could ask anything else, our teacher entered.

“Good morning, everyone.”

The entire classroom slowly became quiet.

“We have a new classmate joining us. Please welcome Mia.”

The girl stood up. She looked nervous.

“Hello,” she said softly.

Some students clapped. Others simply looked at her.

“She has a hearing impairment,” our teacher continued. “So please be considerate. When speaking to her, make sure she can see your face.”

I noticed Mia looking down at her shoes. I wondered if she was embarrassed. But I didn’t know what to say.

During lunch, I found her sitting alone under a tree near the school garden. She was eating a sandwich while reading a book.

“Hey.”

She looked up.

I pointed at the empty space beside her. “Can I sit here?”

She nodded.

I sat down and opened my lunchbox. For a few minutes, neither of us spoke.

Then I noticed the notebook beside her. There were words written on the first page: “If you don’t know what to say, just write it.”

I smiled. “That’s actually pretty smart.”

She looked at me, then at the notebook. She picked up her pen and wrote something. Then she showed it to me.

“You can talk. I can hear some things, but I read lips better.”

“Oh.” I scratched the back of my head. “Sorry. I didn’t know.”

She smiled again. Then she wrote another sentence: “You don’t have to apologize for everything.”

I laughed. “Okay. I’ll try.”

She extended her hand. I looked at it. Then I shook it.

“Ethan.”

She smiled. “Mia.”

And for the first time that day, Monday didn’t feel so bad.

Later that afternoon, I was packing my things when I noticed a folded piece of paper on my desk. I opened it.

“Thank you for sitting with me today.”

There was a tiny smiley face drawn underneath.

I looked toward the window. Mia was already leaving the classroom. For some reason, I wanted to call her name. But I didn’t.

I just watched her disappear into the hallway.

Somehow, I knew this wouldn’t be the last time I would think about her.`,
    },
    {
      id: 'words-i-couldnt-say-2',
      title: 'A Different Kind of Silence',
      order: 2,
      content: `Ethan's POV

The next morning, I arrived before the bell. I told myself it was because Marcus had threatened to lock me out of the classroom. That was only partly true.

Mia was already by the window, drawing the school garden in the corner of her notebook. I lifted my hand in a small wave. She smiled and moved her bag from the empty chair.

Our teacher announced a group project: choose a place in town and make a short presentation about the people who made it special. I was paired with Marcus and Mia. Marcus groaned. Mia wrote, “I like taking photos. I can make the slides.”

We decided on the riverside park. After school, Mia arrived with her camera and showed us how she saw the place. She photographed the old caretaker sweeping the path, a little girl racing a paper boat, and a woman leaving water for the stray cats.

“You notice things everyone else misses,” I said.

Mia wrote, “People are easier to understand when you watch what they do.”

I wanted to ask what she had noticed about me. I didn’t.

We met again the next day. Marcus talked over Mia twice. The second time, I stopped him. “Wait. She’s not finished.”

Mia looked surprised, then showed us her idea: interview the park caretaker about the changes he had seen over thirty years. It became the heart of our project.

Afterward, she wrote, “Thanks for giving me time.”

“Anytime,” I said.

That afternoon, I invited her to the arcade with Marcus. She told me crowded places could be tiring and she needed to check with her mom first. I said we could choose somewhere quieter. She thanked me.

It felt good to be someone who could make things easier for her. I didn’t yet understand that she didn’t need me to manage her life. She needed me to ask—and then listen to her answer.

At lunch, I sat beside her again. We talked about music, classes, and the stray cat that had adopted the garden. I asked what she wanted to do after school. She wrote that she wanted to make films, especially ones about ordinary people.

“That sounds hard,” I said.

“So is math,” she wrote. “I still do it.”

I laughed so loudly a teacher looked over.

For a few days, things felt simple. Then Marcus invited me to a party. I looked across the classroom at Mia and wondered if I should ask her too. I worried she would think I was only being polite.

So I said nothing.

I thought I was being careful. I didn’t know that sometimes silence was only fear wearing a nicer face.`,
    },
    {
      id: 'the-words-i-couldnt-say-3',
      title: 'The Words That Hurt',
      order: 3,
      content: `Ethan's POV

The party was louder than I expected. Marcus had borrowed speakers from his cousin, and the music shook the kitchen cabinets. I stayed near the counter, checking the time and wishing I had invited Mia somewhere quieter instead.

Marcus noticed the project photos on my phone. He joked that Mia was “making a movie about old people and trees.” A few classmates laughed. I felt my face warm. I wanted to defend her, but I worried they would call me dramatic.

Then Marcus imitated the way Mia sometimes leaned closer to understand. It was exaggerated and cruel. I heard myself laugh—a small, nervous sound.

“Stop it,” I said.

Marcus raised his hands. “Relax. She can’t hear us anyway.”

I should have told him that it didn’t matter whether she could hear. I should have walked away. Instead, I muttered, “You’re being stupid,” and let everyone change the subject.

On Monday, Mia didn’t sit with us. She asked our teacher to change project groups. The teacher agreed. I caught up with Mia after class.

“Did I do something?”

She watched my face carefully. “At the party, I saw you laugh.”

“I wasn’t laughing at you.”

“You laughed when Marcus did.”

I searched for a way to explain myself without admitting the truth. There wasn’t one. “I’m sorry.”

Mia opened her notebook. “I believe you feel sorry. That doesn’t make me feel safe around you.”

She left before I could answer.

At lunch, I sat under the garden tree alone. I replayed the moment: Marcus’s joke, my laugh, the chance to speak. I hadn’t made the cruel imitation. I had only helped it feel acceptable.

That evening, I told my mother what happened. She didn’t say I was a good person. She asked what I would do differently when no one was watching.

The next morning, I asked our teacher if I could present my part of the project separately. I didn’t want Mia to be forced to work with me. Then I wrote her a message: “I laughed. I was wrong. I won’t ask you to forgive me. I’ll try to do better, even if you don’t want to be friends.”

Mia read it. She didn’t reply.

For once, I understood that an apology wasn’t a door I could open whenever I wanted. It was a promise I had to keep from my side.`,
    },
    {
      id: 'words-i-couldnt-say-4',
      title: 'Someone Like Me',
      order: 4,
      content: `Mia's POV

A new student joined our class a week later. His name was Noah. He was Deaf and used sign language as his main language. The teacher started to explain how everyone should communicate with him, but Noah raised his hand and signed something to the interpreter. She smiled.

“Noah says he can introduce himself. He doesn’t need us to make a speech about him.”

The class laughed, and Noah grinned. I liked him immediately.

I knew some sign language from a community group I attended with my mother. When Noah and I started talking, my hands moved faster than they had in a long time. We talked about films, school, and the annoying habit hearing people had of shouting when they didn’t know what else to do.

Ethan watched from his desk. I noticed his expression change when Noah made me laugh. I wondered if he was jealous. Then I reminded myself that I didn’t owe anyone an explanation for who I spent time with.

Ethan asked Noah if he could learn a few signs. Noah agreed but warned him that learning three signs wouldn’t make him fluent. Ethan practiced anyway. He mixed up “friend” and “thank you,” and Noah laughed so hard he had to sit down.

For our project, Noah and I invited Ethan to help make a short film about how students experienced the school differently. Ethan asked if we wanted him on the team. We did, with one condition: everyone would share the work, and no one would turn the film into a story about one person saving another.

We filmed the places students went when hallways became overwhelming. Noah showed Ethan how the gym floor trembled when the team ran. I filmed light moving across the garden. Ethan interviewed classmates and learned to wait through pauses instead of filling them.

When Noah walked me to the bus stop, Ethan looked away. The next day, he greeted Noah with the correct sign for “good morning.” Noah signed back, “Better.”

Ethan looked proud, but he didn’t look at me to see if I had noticed.

I did notice.

That was the first time I wondered whether Ethan’s apology might be the start of something different—not forgiveness yet, and definitely not love. Just a little room for trust to grow.`,
    },
    {
      id: 'words-i-couldnt-say-5',
      title: 'If I Could Turn Back Time',
      order: 5,
      content: `Ethan's POV

If I could go back in time, I used to think I would stop Marcus before the cruel joke. Now I understood there were smaller chances to do the right thing every day, and I could still choose them.

I joined Mia and Noah’s film project only when they invited me. I learned signs slowly, practiced with videos Noah recommended, and asked questions instead of pretending I understood. When I made a mistake, I corrected it without turning the moment into a performance.

Marcus started changing too, though he was awkward about it. One afternoon he told me he had uploaded a short clip from the party to the class group chat. Mia wasn’t in the clip, but you could hear us laughing while he mocked the way she leaned in to read lips.

“I deleted it,” he said. “But people already saw it.”

“Deleting it doesn’t undo it.”

Marcus looked down. Together, we asked our teacher to remove the clip from the group archive. We told the students who had shared it that it wasn’t funny. I didn’t use Mia as a reason. I did it because I had helped make the joke acceptable.

When I told Mia, she read my message and wrote, “I’m not ready to be close again. But I see you trying.”

“That’s enough,” I replied.

Noah asked Mia to go with him to a film workshop’s closing night. She agreed. My chest tightened, but I wished them a good time. I didn’t make a joke or disappear.

Later, Mia found me putting away the camera.

“You didn’t ask who I went with,” she wrote.

“I wanted to. I’m trying not to act like I get a vote.”

She studied my face, then smiled a little. “That’s a good start.”

I went home repeating those words, careful not to turn them into a promise she hadn’t made.

The next week, Noah told me he liked Mia. He planned to tell her, but didn’t want to pressure her. I tried to look normal.

“Do you think she likes you?” he asked.

“I don’t know.”

“Good answer,” he said. “Keep not knowing until she tells you.”

I laughed, though my stomach was in knots.

For the first time, I understood that liking someone didn’t give me a right to compete for her like she was a prize. If Mia chose someone else, it would hurt. But it would still be her choice.`,
    },
    {
      id: 'words-i-couldnt-say-6',
      title: 'The Apology',
      order: 6,
      content: `Mia's POV

Our film was selected for the district youth showcase. I was excited, then immediately worried about the venue: the lights were bright, the captions were small, and the audience would sit in rows where it was hard to see faces.

Ethan offered to help. I told him Noah and I could handle the captions, but I wanted him to check the timing. He did exactly that—no more and no less.

Before the showcase, Ethan asked if he could apologize properly. I agreed to meet him in the garden after class.

He started to speak, then stopped and put away the speech he had written. “I laughed when Marcus mocked you. I knew it was wrong, and I still chose to fit in. I also let the clip spread before I asked him to delete it. I’m sorry for making you feel like the class was a place where people could laugh at you. You don’t have to forgive me. I just wanted you to hear what I did, without excuses.”

I read his lips, then wrote: “Thank you for being specific. I was angry for a long time. I’m still careful around you.”

“I understand.”

I took a breath. “I don’t want to spend the rest of the year pretending you don’t exist. We can be project partners. We can see what happens.”

“I’d like that,” he said. He didn’t ask what “see what happens” meant.

At the showcase, Marcus stood beside the projector, visibly nervous. Before the film began, he told the audience he had helped spread a cruel clip about a classmate and had been wrong. He didn’t say I had forgiven him. I hadn’t. He simply took responsibility.

Our film played with open captions. It showed the school through three perspectives: Noah’s sense of rhythm and movement, Ethan’s interviews, and my attention to faces and light. The audience applauded.

Afterward, I handed Ethan a folded note: “You listened today. That matters more than having the perfect words.”

He folded the note carefully and kept it in his pocket.

Noah walked with me toward the bus stop. He told me he liked me, but that our friendship mattered more than the answer he wanted. I cared about him deeply, but not romantically. I told him the truth. He looked disappointed, then nodded.

“I’m glad you told me yourself,” he said.

I was learning that kindness wasn’t always saying yes. Sometimes it was trusting someone with an honest no.`,
    },
    {
      id: 'words-i-couldnt-say-7',
      title: 'Learning to Listen',
      order: 7,
      content: `Being project partners didn’t turn everything back to the way it had been. I still chose where I sat. Sometimes I wanted to talk; sometimes I wanted to work quietly. Ethan learned that friendship wasn’t a prize he had earned by apologizing.

We started a small film club with Noah and a few classmates. I suggested every screening include captions. Noah taught us basic signs and told us when we were getting them wrong. Ethan learned that good intentions were useful, but they weren’t a substitute for asking.

One Friday, we watched an old silent film. Ethan expected it to feel slow. Instead, I pointed out how much could be said through a glance, a pause, or the way someone held a door for another person.

After the screening, Ethan told me he used to think being a good person meant never making a mistake. Now he thought it mattered more what he did after.

“That sounded almost wise,” I wrote.

“I practiced.”

I laughed. He looked happy, but didn’t ask me to explain why.

Marcus began changing too. He stopped using my hearing as a punchline and started calling out others who did. I didn’t instantly trust him. I did accept his help carrying the projector when he asked first.

At the next meeting, Noah signed something quickly. I translated: “He says Ethan can hold the camera, if he promises not to point it at his own shoes.”

Ethan looked offended. We laughed together.

On the walk home, Ethan asked if I wanted to stop at the corner shop. We bought warm drinks and sat on the steps outside. He asked me what I wanted to do after graduation.

“Make films,” I wrote. “Maybe study in Busan. I want to record people who usually get cut out of the frame.”

He read the words twice. “That sounds like you.”

“What does that mean?”

“It means I can picture you doing it.”

I liked the way he said it. He wasn’t trying to keep me close or convince me to be brave. He just seemed to believe I could go.

For the first time, I wondered what it might feel like to let him know me—not as a project, not as someone he had to make amends to, but as a person who could still surprise him.`,
    },
    {
      id: 'words-i-couldnt-say-8',
      title: 'A Smile Worth Waiting For',
      order: 8,
      content: `Our film club began meeting every Thursday. We chose the old train station because it was about to be renovated. I wanted to record the details that might disappear: the clock that ran three minutes slow, the vendor who sold warm buns, and the worn bench where students waited after school.

Ethan learned to use the camera without shaking. I showed him how to frame a scene so the viewer noticed what mattered. When he filmed me signing a story about the station, he asked permission before using the footage. I said yes, then asked him to keep the shot wide enough to show my expression too.

After the shoot, rain trapped us beneath the station awning. Noah had left early for a family dinner. Ethan and I shared a packet of crackers from his bag and watched the tracks shine under the lights.

“You’re different lately,” I wrote on my phone.

“Good different or ‘you need to stop’ different?”

“Still deciding.”

He wanted to ask if I liked him. I could see the question in his face, but he didn’t force it. He told me he had started sign lessons because he wanted to communicate better with everyone, not because he expected anything from me.

“I know,” I signed. Then I showed him the sign for “patient.”

Ethan tried it. His handshape was wrong.

“You’re very bad at this,” I teased.

“I’m patient.”

I corrected his fingers. My hand stayed over his for a second longer than necessary. Neither of us moved away.

At the next club meeting, Noah told me he had feelings for me. He said it plainly and kindly, and added that our friendship mattered more than getting the answer he wanted. I thanked him. I cared about him, but my feelings weren’t romantic.

After Noah left, Ethan asked if everything was okay.

“Yes,” I said. “He was honest. I was honest too.”

Ethan nodded. He didn’t ask whether my answer meant something for him.

“You can ask,” I told him.

He took a breath. “Would you like to go to the spring festival with me? As a date, if you want.”

I smiled. “Yes. But you have to let me win at the ring toss.”

“I would never challenge you.”

“You absolutely would.”

We laughed. The rain stopped, and we walked home slowly.`,
    },
    {
      id: 'words-i-couldnt-say-9',
      title: 'Between Us',
      order: 9,
      content: `Our first date was almost ruined by a broken bus, a spilled drink, and Marcus accidentally sending Ethan’s embarrassing childhood photo to the film-club chat. I laughed so hard at the picture that Ethan forgot to be embarrassed.

We shared fish-shaped pastries at the spring festival and tried the ring toss. I won three times. Ethan claimed the bottles were uneven. I reminded him he had promised to let me win. He admitted he had lied; I had beaten him fairly.

Under the lanterns, Ethan told me he liked me. He didn’t ask me to say it back. I reached for his hand and squeezed once. It was enough.

For a few weeks, everything felt easy. Then I received an invitation to a summer film program in Busan. It was a rare opportunity: workshops, mentors, and a chance to show my work at a youth festival. I wanted to go. I was also afraid that leaving would change what Ethan and I had just begun.

Ethan found the acceptance letter in my notebook when he returned a borrowed camera. He should have handed it back and waited for me to tell him. Instead, he blurted, “You’re leaving?”

My expression closed. “I was going to tell you.”

“When? After you decided?”

“I haven’t decided. I wanted to think before everyone started telling me what to do.”

“I’m not everyone,” he said.

“You’re acting like I have to choose between the program and you.”

He apologized, but I needed space. I told him the opportunity was mine to consider, not a test of whether I cared about him.

That evening, Noah revealed the twist: he had also been accepted to the program and had recommended my film. He hadn’t told me because he wanted me to apply for myself, not because he would be there. I had earned my place.

Ethan felt jealous again, then ashamed. Noah had supported my future without asking to be chosen. Ethan realized that loving someone couldn’t mean making their world smaller so he would feel safer.

He wrote me a message: “I’m scared I’ll miss you. That’s my feeling to handle, not a reason for you to stay. I hope you go.”

I read it twice. Then I called him. We didn’t solve everything that night, but we finally talked without asking the other person to give something up.`,
    },
    {
      id: 'the-words-i-couldnt-say-10',
      title: 'The Words I Couldn’t Say',
      order: 10,
      content: `I accepted the Busan program. Ethan helped me pack camera batteries and captioning equipment. At the station, he signed “good luck” carefully. I corrected his handshape, smiling.

“You’ll get better,” I said.

“I have a good teacher.”

“I charge extra for romance.”

“I can pay in strawberry milk.”

I laughed, then grew serious. We agreed to keep talking while I was away, but not to promise that nothing would change. We would be honest, even when the truth was inconvenient.

The summer was difficult. Our calls didn’t always line up. Sometimes I was too tired to talk after workshops; sometimes Ethan felt jealous when I mentioned a new friend from the program. He learned to say, “I’m feeling insecure, but I know you haven’t done anything wrong.” I learned I could ask for quiet without Ethan assuming I was angry.

At the final showcase, my film played with open captions and an audience that leaned forward to catch every detail. It was about the station, the school garden, and the people who had learned to wait long enough to understand one another. Ethan watched the livestream with his mother and Marcus. When I appeared onscreen, I looked nervous, then lifted my chin and began my introduction in my own voice and signs.

The film won a community award. Its title was “The Words I Couldn’t Say.”

When I returned, Ethan waited at the station with a sign he had practiced for weeks: “I missed you. I’m glad you went.” His hands shook. I understood him anyway.

“I missed you too,” I said. “And I’m glad I went.”

We didn’t pretend love had fixed every hard thing. We chose to keep learning: to ask before assuming, to speak when silence protected the wrong person, and to make room for each other’s dreams.

I opened my old notebook to the first page. “If you don’t know what to say, just write it.”

Ethan added beneath it: “And if you get it wrong, listen. Try again.”

I took his hand. Our story had begun with one ordinary Monday and a boy who sat beside me. It continued because, at last, he had learned that listening was more than hearing—and that some words were worth taking the time to say.`,
    },
    {
      id: 'the-words-i-couldnt-say-11',
      title: 'The Monday After Summer',
      order: 11,
      content: `Mia's POV

The first Monday back at school smelled like wet pavement and cafeteria toast. Everyone wanted to hear about Busan: the film workshops, the crowded train stations, and the friend who taught me how to make subtitles glow against a bright sky.

Ethan waited until the questions had quieted. “Do you want to tell me about it?”

I smiled. “Yes. But not all at once.”

He nodded. No disappointed face. No joke about being left out. He just walked beside me to class, carrying my camera case when I offered it.

At lunch, I showed him a clip of the sea. It was only six seconds: sunlight on the water, a ferry crossing the frame, my laugh at the end.

“You sound happy,” he said.

“I was.”

“I’m glad.”

I believed him. That was the new part—not that he said the right thing, but that I could see he meant it.

When the bell rang, Ethan asked if I wanted to sit together after school. I said yes. It felt less like returning to an old story and more like choosing to begin the next page.`,
    },
    {
      id: 'the-words-i-couldnt-say-12',
      title: 'Our Little Rules',
      order: 12,
      content: `Ethan's POV

Mia and I made a list of things that helped when we got busy. It started as a joke on the back of a math worksheet.

One: If you need quiet, say so. Quiet does not mean goodbye.

Two: Ask before borrowing the camera.

Three: Strawberry milk is an apology only if the other person actually wants strawberry milk.

Four: No deciding what the other person feels.

Mia added a fifth rule: “No pretending you understand a sign just because you want to look cool.”

I tried to argue that I had never looked cool in my life. She pointed at the time I signed “teacher” when I meant “thank you.” I gave up.

We kept the list inside her notebook. It was not a contract. It was a reminder that caring about someone did not magically make us good at understanding each other.

On Friday, she asked me to come to the film club’s first meeting after summer. I said I had to help my mom close the grocery shop. Mia offered to help sort the donation box.

I almost said she did not have to. Then I remembered our rules.

“Would you like to?” I asked.

“Yes,” she wrote. “But only if I choose the music.”

I knew I was in trouble when she chose a song I secretly liked.`,
    },
    {
      id: 'the-words-i-couldnt-say-13',
      title: 'The Boy Beside Her',
      order: 13,
      content: `Mia's POV

Noah came back from Busan with a new camera strap and stories about getting lost in a subway station. He and I spent lunch comparing photographs from the program. Ethan sat with us, smiling, but I noticed he went quiet whenever Noah and I signed quickly.

Afterward, Ethan asked if Noah and I had become closer.

“We’re friends,” I said.

“I know.”

“Do you?”

He looked embarrassed. “I’m trying to ask instead of guessing.”

I liked that he tried. I also wanted him to understand that jealousy could not become another job I had to manage for him.

“I care about you,” I wrote on his phone. “But I need to have friends without proving what they mean.”

Ethan read the message twice. “You’re right. I got insecure. That’s mine to work on.”

At the next club meeting, he asked Noah to teach him the sign he had missed. Noah did. The three of us laughed over Ethan’s handshape.

On the walk home, Ethan did not ask me to reassure him. He told me about a documentary he had watched and asked what I thought. I realized trust was not one grand promise. It was the small relief of not having to defend an ordinary friendship.`,
    },
    {
      id: 'the-words-i-couldnt-say-14',
      title: 'A Camera Between Us',
      order: 14,
      content: `Ethan's POV

The film club chose a new project: a short documentary about the people who kept our school running. Mia wanted to film the cafeteria workers, the guard at the front gate, and the woman who watered the garden before classes began.

I volunteered to interview them. My first conversation with the guard lasted three minutes because I kept asking questions that could be answered with yes or no.

Mia watched the footage with me.

“You’re asking questions like you’re trying to finish,” she said.

“I am trying to finish.”

“Try being curious instead.”

So I went back. I asked the guard what he noticed first each morning. He told me about a student who always ran through the gate with one shoe untied. It was me. Apparently, I had done it since middle school.

Mia laughed when she saw the clip. I told her the guard had betrayed me. She signed that the camera had simply recorded the truth.

We edited side by side. Our shoulders touched. When I wanted to hold her hand, I asked. She looked at my hand, then placed hers in it.

“You can ask,” she whispered.

“I know.”

“And I can say no.”

“I know that too.”

She squeezed my fingers. For a moment neither of us looked at the screen.`,
    },
    {
      id: 'the-words-i-couldnt-say-15',
      title: 'The Empty Classroom',
      order: 15,
      content: `Mia's POV

Our film club was moved to a smaller classroom after the school announced budget cuts. The room had no proper screen, and the lights flickered whenever we plugged in the projector. Some students said it was not worth continuing.

Ethan wanted to complain to the principal immediately. I wanted to ask the members what they needed first. We disagreed, then made a list together: a working projector, captions for every film, and a room where everyone could see one another.

Marcus surprised us by volunteering to talk to the student council. He admitted he had once thought accessibility was an extra favor. Now he understood it was part of making something for everyone.

The council agreed to lend us the art room twice a week. It had big windows and tables that could be moved into a circle.

After the meeting, Ethan and I stayed to sweep. He turned off the flickering lights while I packed the cables. In the sudden dimness, he signed, “Thank you for not letting me rush ahead.”

I signed back, “Thank you for still coming with me.”

He took my hand, then waited. I leaned closer first.

Our kiss was brief and awkward because the door opened just as we touched foreheads. Marcus looked in, saw us, and immediately backed out.

“I saw nothing,” he called.

I hid my face in Ethan’s shoulder, smiling.`,
    },
    {
      id: 'the-words-i-couldnt-say-16',
      title: 'The News at Dinner',
      order: 16,
      content: `Ethan's POV

My mother told me after dinner that my father had been offered a job in another city. He had been working away from home for months, and the new position would mean our family might move before the next school year.

“We haven’t decided,” Mom said. “Your father wants to hear what you think.”

I nodded like it was no big deal. Then I spent the whole night staring at our list of rules.

Tell the truth.

Don’t decide what Mia feels.

I wanted to tell her right away. I also wanted to wait until I knew whether the move was real. I was scared she would hear “different city” and think I was asking her to promise we would stay together.

The next day, she asked why I looked tired. I said I had been helping at the shop.

It was true, but not the whole truth.

At school, Mia showed me a new cut of the documentary. The final scene had a student leaving through the gate while the guard held it open. It was simple and beautiful.

“What do you think?” she asked.

“I like it.”

She looked at me carefully. I almost told her about the job. The bell rang, and I let the moment pass.

The silence followed me all day. I was beginning to understand that hiding something “until I know more” could still make someone feel shut out.`,
    },
    {
      id: 'the-words-i-couldnt-say-17',
      title: 'A Photograph from Busan',
      order: 17,
      content: `Mia's POV

The film program posted its summer showcase photographs. Noah and I were standing together in one of them, laughing over a camera that had jammed. Someone from school shared it with a teasing caption: “Busan couple reunion?”

Ethan saw the post before I did. His messages became short. When I asked if he was okay, he said he was just busy.

I recognized that answer. It was the kind of answer that made me responsible for guessing.

At lunch, I asked him directly. He admitted the photo made him jealous and said he knew I had done nothing wrong. I thanked him for telling me. Then I asked what else was bothering him.

He looked at the table. “My dad might move us to another city.”

The words hurt—not because he might move, but because I had learned it from his face instead of from him.

“When did you find out?”

“A few days ago.”

“You don’t have to know what will happen before you tell me.”

He apologized. I told him I wasn’t angry that he was scared. I was hurt that he had left me outside the truth.

He promised to talk to me after speaking with his parents. I said I would listen, but I couldn’t make the decision easier by pretending it didn’t matter.

That afternoon, we sat together in the art room without holding hands. It was uncomfortable. It was also honest.`,
    },
    {
      id: 'the-words-i-couldnt-say-18',
      title: 'What We Can’t Promise',
      order: 18,
      content: `Ethan's POV

My parents explained the situation carefully. The new job would help Dad stay close to home, but it meant moving to Daejeon. The move was not certain yet. There was time to decide, but not forever.

I told Mia everything after school. She listened without interrupting.

“I don’t want you to choose where to live because you’re afraid I’ll be sad,” she said.

“I don’t want you to think I’m leaving because I don’t care.”

“Then tell me what you want, not what you think I want to hear.”

I wanted to stay. I also wanted my father to have a job that did not keep him away from us. Both things were true.

Mia told me she might apply to a film program in Seoul after graduation. She didn’t know if she would get in, or whether she would want to go. She hadn’t told me because she was still figuring out what she wanted.

For a moment, I felt the old fear return: if we loved each other, shouldn’t we know the same future?

Then I remembered the station. Mia had gone to Busan, and we had learned how to keep talking. The future did not have to be decided in one conversation.

We promised only this: no hiding important news, no asking the other person to give up a dream, and no making forever plans while we were still learning who we would become.`,
    },
    {
      id: 'the-words-i-couldnt-say-19',
      title: 'The Misunderstood Message',
      order: 19,
      content: `Mia's POV

The next week, I saw a message on Ethan’s phone while he was showing me a photo of the documentary poster. It was from his father: “If you take the spot, we can move after the term.”

Ethan turned off the screen. I felt my stomach tighten.

“What spot?” I asked.

He explained that his father had offered to delay the move until the school term ended. Ethan had not answered yet. He had wanted to discuss it with me first, but the message had arrived that morning.

I believed him. Still, the words “we can move” sounded like a decision already made.

“I don’t want you to stay for me,” I said.

“I know.”

“Do you? Because I don’t want to become the reason you resent your family.”

He said he needed time to talk with his parents. I told him to take it. Then I went home feeling as if every choice had suddenly become a test.

Noah found me at film club and asked what was wrong. I told him. He reminded me that Ethan’s decision belonged to Ethan, just as my future belonged to me.

It was obvious advice. I needed to hear it anyway.

I sent Ethan a message: “I love spending time with you. I also need you to make this choice with your family, not for me. I can handle the truth, even if it’s hard.”

He replied, “I’m going to talk to them tonight. Thank you for trusting me to choose.”

I read it twice. Then I set my phone down and returned to editing.`,
    },
    {
      id: 'the-words-i-couldnt-say-20',
      title: 'Noah’s Honest Answer',
      order: 20,
      content: `Ethan's POV

Noah found me in the gym after school. He asked if the move was real. I said it might be.

“Mia told you?” I asked.

“She told me she was worried. She didn’t ask me to fix anything.”

I nodded. Noah had always been better at saying exactly what he meant.

He told me he had once hoped Mia might choose him. Seeing her with me had hurt at first. But he valued their friendship and did not want his feelings to become a reason she felt guilty.

“You’re telling me this why?”

“Because you keep acting like I’m your rival. I’m not trying to win her. She isn’t a contest.”

I felt embarrassed. Noah had been kind to me even when I made his friendship with Mia into something threatening.

“I’m sorry,” I said.

“I know. Keep showing it.”

We watched the basketball team practice in silence. Noah asked if I wanted to help with the school film showcase. He was planning a short piece about people choosing different paths after graduation.

I said yes.

That evening, I spoke with my parents. I told them I wanted us to decide together, but I didn’t want my relationship to be the deciding reason. Dad admitted he wanted me to have a say because he remembered being moved as a teenager without anyone asking.

We agreed to wait for the job’s final details. The uncertainty remained, but at least it belonged to all of us now.`,
    },
    {
      id: 'the-words-i-couldnt-say-21',
      title: 'A Place in the Showcase',
      order: 21,
      content: `Mia's POV

Noah’s documentary team needed someone to design captions that felt like part of the film, not an afterthought. I joined, and Ethan volunteered to record interviews. We asked students what they wanted after graduation and what they were afraid to say out loud.

A student who wanted to be a dancer worried her family would call it foolish. A boy who planned to work at his uncle’s shop felt ashamed that he did not want university. Their answers reminded me that everyone carried a future they were still learning to name.

The teacher announced that the showcase would be held in the main hall. The school agreed to provide an interpreter and a screen large enough for readable captions. I was proud of what we had changed since the first film-club meeting.

Ethan interviewed his father about the possible move. His voice shook at first, but he kept the camera steady. His father said a family could love one another without always wanting the same thing at the same time.

I watched Ethan from behind the monitor. I wanted to take his hand. I waited until we were done, then asked.

He said yes.

“I’m proud of you,” I told him.

“For the interview?”

“For not hiding.”

He smiled. I leaned against his shoulder while the next interview began. It wasn’t a solution to the move. It was a moment we could share without pretending the problem was gone.`,
    },
    {
      id: 'the-words-i-couldnt-say-22',
      title: 'The Night the Projector Failed',
      order: 22,
      content: `Ethan's POV

The night before the showcase, the projector stopped working. The replacement from the district office was too dim to show our captions clearly. The team panicked. I started listing possible fixes until Mia asked everyone to pause.

She suggested using the smaller room with the newer screen. It could not fit the whole school, but we could stream the film to the library and post a captioned version afterward. Noah contacted the library. Marcus found extension cables. I called my father, who knew someone at the community center.

Within an hour, we had a backup plan.

I watched Mia coordinate the room, checking sightlines and asking people what they needed. She did not do everything alone. She let us help, and she corrected us when we got something wrong.

When the last cable was taped down, we sat on the floor and shared the snacks Marcus had brought.

“This is the worst pre-show party,” I said.

Mia signed, “You say that now. Wait until the film wins an award.”

“You think it will?”

“I think it matters whether it wins.”

I looked at the screen, where the opening title waited in white letters. I realized the film was not about proving we had fixed the school. It was about showing that people could make room for one another.

The projector flickered on. The captions were clear.`,
    },
    {
      id: 'the-words-i-couldnt-say-23',
      title: 'The Choice at the Station',
      order: 23,
      content: `Mia's POV

The showcase was two days away when Ethan’s father received the final offer. The move to Daejeon would happen at the end of the term. Ethan would finish the school year here, then join his family.

Ethan told me at the station. He looked like he wanted to apologize for the whole city.

“I’m sad,” I said. “But I’m glad you talked to your parents.”

“I don’t want this to be goodbye.”

“Then don’t make it one yet.”

He nodded. We talked about visits, calls, and all the practical things that could make long distance possible. Then we stopped planning and stood quietly as trains came and went.

“I wish I could say it won’t be hard,” he said.

“I don’t need you to promise that.”

He told me he would miss the film club and the garden and the way I made him check whether his camera lens cap was on. I told him I would miss having someone who brought strawberry milk even when I hadn’t asked.

The train announcement sounded. Ethan’s mother was waiting on the other platform; they were visiting the new apartment for the weekend.

I signed, “Go see it. Tell me the truth about it.”

He signed back, slowly and carefully, “I will.”

When the train pulled away, I felt the sadness arrive. It was real. So was the trust that he would come back and tell me what he found.`,
    },
    {
      id: 'the-words-i-couldnt-say-24',
      title: 'The Argument We Needed',
      order: 24,
      content: `Ethan's POV

The apartment in Daejeon was bright and close to Dad’s new workplace. Mom liked the kitchen. Dad liked that we could all eat dinner together. I liked none of it at first, because every good thing felt like proof I should not complain.

On the ride home, I told Mia it was fine.

She looked at me through the video call. “You don’t have to make it fine for me.”

I said I was only trying not to worry her.

“That means you’re deciding what I can handle again.”

I got defensive. I said she was making everything about our relationship. She went quiet.

The call ended badly.

I spent the evening angry, then realized I was angry at the apartment, the move, and myself—and I had aimed it at Mia because she was the person I trusted to stay.

I called back and apologized for snapping. She told me she was sorry too for pushing when I had not asked for advice. We talked about what had actually happened: the apartment was good, and I was sad to leave.

Both things could be true.

I told my parents I wanted to finish school in Daejeon after the term. I also asked if I could return to Seoul for the showcase. They agreed.

When I told Mia, she smiled. “That sounds like your choice.”

It was. The first one I had made without trying to guess what would make everyone else feel safe.`,
    },
    {
      id: 'the-words-i-couldnt-say-25',
      title: 'The Apology That Stayed',
      order: 25,
      content: `Mia's POV

The day before the showcase, Marcus asked if he could talk to me. He had been trying to change for months, but he had never asked me to forgive him.

He said he had once thought being funny meant getting people to laugh, no matter who got hurt. He had repeated the old clip because he wanted attention. He had deleted it, but deletion could not make it unseen.

“I’m not asking you to say it’s okay,” he said. “I just wanted to tell you I know what I did.”

I thanked him for saying it plainly. I told him I was not ready to be close friends. He nodded and said he understood.

That evening, Ethan arrived back in Seoul with his family. He brought a box of strawberry milk for the club. The label was the wrong flavor.

“You chose this on purpose,” I said.

“I panicked in the store.”

“You could have asked.”

“I did. The shopkeeper said this one was popular.”

I laughed. The sound loosened something in my chest.

Ethan told me the move was still happening after the term. He didn’t ask me to tell him not to go. I told him I wanted him to go if it was right for his family and his future.

“I want to try long distance,” he said. “But only if you do too.”

I looked at him. “I do. Let’s see how we do, one week at a time.”

He nodded. No grand promise. Just a beginning we both chose.`,
    },
    {
      id: 'the-words-i-couldnt-say-26',
      title: 'The Film We Made Together',
      order: 26,
      content: `Ethan's POV

The showcase began with the school band playing softly while students found their seats. The interpreter stood where everyone could see her. The captions were checked twice. Mia sat beside me, her camera resting in her lap.

Our documentary opened with the school gate at sunrise. The guard held it for a student with a broken shoelace. The cafeteria worker set aside an extra bowl for someone who had missed breakfast. Noah filmed the gym floor trembling under the team’s footsteps. Mia captured a row of hands signing jokes across the art-room table.

My interviews connected the scenes. I asked people what they wished others would understand. Their answers appeared on screen in open captions.

The final scene showed the empty classroom where the flickering projector had first failed. One by one, students entered carrying lamps. They arranged them around a screen until the room was bright enough for everyone.

When the film ended, the audience stayed quiet for a breath. Then the applause rose.

Mia looked at me. I signed, “You did it.”

She signed back, “We did.”

The film won no grand prize. It received a special mention for community storytelling. Marcus cheered louder than anyone. Noah pretended he was embarrassed.

I didn’t care about the award. I cared that the room had watched the whole film together, and that no one had been asked to choose between seeing and hearing the story.`,
    },
    {
      id: 'the-words-i-couldnt-say-27',
      title: 'What the Future Asked',
      order: 27,
      content: `Mia's POV

After the showcase, the school’s media teacher asked if I wanted to help lead a student film workshop next year. It was not a scholarship or a movie contract. It was a chance to teach younger students how to tell stories with images, sound, and captions.

I wanted to say yes immediately. Then I remembered I would be applying to the film program in Seoul. I was afraid I would disappoint the teacher if I left.

Ethan asked what I wanted, not what I thought I should do.

“Both,” I admitted.

We made a schedule: I could help design the workshop materials before moving, and the teacher would find another student to lead the sessions. It was not perfect, but it let me contribute without giving up the application.

That night, Ethan told me he wanted to join the school’s media club in Daejeon. He had never thought of himself as creative. The interviews had made him realize he liked asking people questions and helping their stories take shape.

“You’re good at that,” I signed.

“You’re biased.”

“I’m observant.”

We sat on the station steps, planning visits around exams and family weekends. Our future looked less like one road and more like two roads with places to meet.

I wasn’t sure we would always manage it. I was sure I wanted to try without asking either of us to stop growing.`,
    },
    {
      id: 'the-words-i-couldnt-say-28',
      title: 'The Last Week in Seoul',
      order: 28,
      content: `Ethan's POV

The last week of term passed too quickly. My friends signed the back of my notebook. Marcus drew a terrible portrait of me. Noah gave me a memory card with extra footage from the film.

Mia and I tried to make ordinary memories: walking home after class, buying snacks, sitting under the garden tree. We did not spend every minute together. She needed time with her family and film club. I helped Mom pack.

One afternoon, I found Mia in the classroom by the window. The seat where we had first talked was empty.

“Do you remember the note you left me?” I asked.

“Thank you for sitting with me?”

“I kept it.”

She looked surprised. I showed her the folded paper, worn soft at the edges. She smiled and added a tiny camera beside the smiley face.

I gave her the notebook we had used to make our little rules. On the last page, I wrote: “No promises that distance will be easy. One promise that we will tell the truth.”

Mia read it and signed, “Good.”

I wanted to say I loved her. The words felt important, but I didn’t want them to become a request for her to make leaving easier.

So I said, “I’m glad I met you.”

She took my hand. “I’m glad too.”

The words I couldn’t say were still there. They no longer felt like a wall.`,
    },
    {
      id: 'the-words-i-couldnt-say-29',
      title: 'Two Cities, One Promise',
      order: 29,
      content: `Mia's POV

Ethan moved to Daejeon after the term ended. The first week, we called every night. The second week, his father’s schedule changed and my workshop ran late. We missed two calls and had our first long-distance argument over a message that looked colder than it was meant to.

I wanted to decide that long distance was impossible before it could hurt more. Ethan asked if we could talk when we were both rested. We did.

We set a rhythm that belonged to us: two planned calls a week, messages whenever we wanted, and no punishment for being busy. If something felt wrong, we would ask instead of collecting evidence in silence.

It wasn’t a perfect system. Sometimes I missed him so much that even the video screen felt unfair. Sometimes he got quiet when I talked about the film program. But we got better at naming what we felt without turning it into blame.

At the end of summer, I received an interview invitation from the Seoul program. Ethan was the first person I told. He celebrated before asking whether I would still visit.

“Yes,” I said. “And you’ll visit me too.”

He grinned. “I’ll bring the correct strawberry milk.”

“You’ve never done that once.”

“I’m still learning.”

So was I. We both were.`,
    },
    {
      id: 'the-words-i-couldnt-say-30',
      title: 'The Words We Learned',
      order: 30,
      content: `Ethan's POV

One year later, Mia’s film was selected for a youth showcase in Seoul. My family came down from Daejeon for the screening. Mom brought snacks for the whole film club. Dad held the program upside down and insisted he was reading it correctly.

Mia’s new film was about messages people almost sent but didn’t. It included my old note, “Thank you for sitting with me today,” with her permission. The audience never saw our faces, only our handwriting and the small changes in the words we had added over time.

After the screening, I found Mia by the window of the theater lobby. Rain tapped softly against the glass.

“Do you remember the first Monday?” she asked.

“I was late.”

“You were always late.”

“I’m improving.”

She smiled. I signed, carefully, “I love you.”

Her eyes brightened. She signed back, “I know. I love you too.”

We had not solved every problem. Our cities were still different. Her dreams were growing; so were mine. But love no longer meant guessing, fixing, or asking someone to stay so we could feel safe.

It meant listening. It meant apologizing without demanding forgiveness. It meant making room for the other person’s voice, even when the words took time.

Mia opened her notebook to the first page: “If you don’t know what to say, just write it.”

I added one final line beneath it: “And when you’re ready, say it.”

Outside, the rain softened. We walked into the evening together—not because we knew exactly where the road would end, but because we had learned how to keep choosing the next step.`,
    },
  ],
  'sample-kusina': [
    {
      id: 'bawal-mahulog-sa-kusina-1',
      title: 'Ang Lalaking May Sandok',
      order: 1,
      content: `Mara Villanueva's POV

Sa edad na dalawampu't pito, marami na akong natutuhan tungkol sa mga taong nagsasabing, “Madali lang 'yan.”

Karaniwan, hindi sila ang magbubuhat ng mesa, magliligtas ng nawawalang kuryente, o magpapaliwanag sa kliyenteng gusto ng sampung metrong bulaklak sa loob ng silid na kasya lang ang pito.

Kaya nang dumating ako sa lumang Hotel Amihan para sa pinakadelikadong event ng karera ko, handa ako sa lahat.

Maliban sa chef na nakaharang sa pinto ng kusina, may hawak na sandok at nakangiting parang alam niyang mahuhuli ako sa pagtingin.

“Mara Villanueva?” tanong niya.

“Ikaw si?”

“Gabo. At bawal ang sapatos mo sa basang sahig.”

“Bawal din ang pambabastos sa event planner.”

“Ayos. Pareho tayong may listahan ng bawal.”`,
    },
    {
      id: '-mahulog-sa-kusina-2',
      title: 'Isang Linggo Para Magtalo',
      order: 2,
      content: `Gabo Reyes's POV

Si Mara ang event planner na ipinadala ng may-ari para sa muling pagbubukas ng hotel. May dalang clipboard, apat na telepono, at ekspresyong kayang magpaurong sa bagyo.

May isang linggo siya para gawing kaakit-akit sa mga investor ang lumang ballroom. May isang linggo rin ako para patunayang kaya ng kusina kong pakainin ang lahat nang hindi ginagawang mamahaling palabas ang pagkain.

“Kailangan natin ng open kitchen,” sabi niya.

“Kailangan ko ng espasyong hindi dadaanan ng mga bisitang nakasuot ng mamahaling damit.”

“Kailangan ko ng chef na marunong makipagkompromiso.”

“Kailangan ko ng planner na marunong tumikim bago mag-utos.”

Inilahad niya ang kutsara. Tinanggap ko.

Nang tikman niya ang sabaw, saglit siyang natahimik.

“Masarap,” sabi niya.

“Narinig ko.”

“Huwag kang masanay.”`,
    },
    {
      id: 'kusina-mahulog-sa-kusina-3',
      title: 'Pumirma, Huwag Ngumiti',
      order: 3,
      content: `May sariling ugali ang Hotel Amihan. Kumakalansing ang lumang elevator kahit walang sakay, amoy sampaguita ang pasilyo tuwing umuulan, at tumutulo ang kisame sa ballroom sa mismong puwesto ng pangunahing mesa.

Habang sinusukat ko ang sahig, si Gabo naman ay nag-aayos ng estante sa kusina. Pinagsabihan niya ako nang iwan ko ang bag sa daanan.

“Lahat ba ng bagay kailangan mong ayusin?” tanong ko.

“Hindi. Yung mga delikado lang.”

“At ako ba, delikado?”

Napahinto siya. “Hindi pa ako sigurado.”

Ngumiti ako na para bang wala akong naramdaman. Pagkatapos, sinulat ko sa clipboard: *Huwag ngumiti sa chef. Nakaaabala.*`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-4',
      title: 'Ang Sobrang Init ng Kusina',
      order: 4,
      content: `Pagsapit ng tanghali, nasira ang air-conditioning ng kusina. Pumasok ako para tingnan ang linya ng serbisyo at lumabas na may pulang pisngi at patak ng pawis sa leeg.

“Sabi ko sa iyo, mainit dito,” sabi ni Gabo.

“Hindi mo sinabing parang oven.”

“Gusto mong magpalit ng damit?”

Tiningnan ko ang puting blouse ko. “May extra ka?”

Inabot niya ang malinis niyang itim na apron. Nang itali niya iyon sa baywang ko, lumapit ang mga daliri niya sa balat ko, ngunit naghintay siya bago higpitan ang buhol.

“Ayos lang?” tanong niya.

“Oo.”

Nang matapos siya, umatras siya agad. Nakakainis na magalang. Mas nakakainis na bagay sa kaniya ang amoy ng kape at usok.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-5',
      title: 'Tikim Lang',
      order: 5,
      content: `Tinuruan niya akong gumawa ng sisig na pang-tikim ng mga investor. Hindi ako pinayagang hawakan ang kutsilyo.

“Hindi ako bata,” sabi ko.

“Hindi rin ako interesado sa first aid.”

Sa halip, ipinatikim niya sa akin ang sarsa mula sa kahoy na kutsara. Nasa pagitan ng mga daliri niya ang hawakan, at ilang pulgada lang ang layo ng mukha niya.

“Kulangan ng asim,” sabi ko.

“Talaga?”

“Oo.”

Idinagdag niya ang kalamansi, saka inilapit ulit ang kutsara. Mas masarap na. O baka masyado lang akong nakatingin sa labi niya.

“Mas mahusay ka sa kusina kaysa inaakala ko,” sabi niya.

“At ikaw, mas matulungin kaysa ipinapakita mo.”

“Huwag mong ipagsabi.”`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-6',
      title: 'Ang Dating Kasintahan',
      order: 6,
      content: `Dumating si Marco sa hotel na may dalang mamahaling bulaklak at ngiting alam kong bahagi ng negosyo niya. Dating kasintahan ko siya, at ngayon ay kumakatawan sa kumpanyang gustong bumili ng Amihan.

“Mara, namiss kita,” sabi niya.

“Hindi mo namiss ang mga deadline ko noong tayo pa.”

Natawa siya at inilagay ang kamay sa likod ko. Bago ko pa maalis iyon, sumulpot si Gabo na may tray.

“Kailangan ko siya sa kusina,” sabi nito.

“Kailangan mo?” tanong ni Marco.

“May trabaho kami.”

Hindi ako bagay na puwedeng agawin, kaya ako ang sumagot. “Tama na, pareho. Marco, mamaya ang meeting. Gabo, huwag mong ibuhos ang kape sa bisita.”

“Hindi ko pangangakuan,” sabi ni Gabo.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-7',
      title: 'Hindi Ka Nagseselos',
      order: 7,
      content: `Nang makaalis si Marco, tinanong ko si Gabo kung bakit niya ako hinila palayo.

“Hindi kita hinila. Kailangan kita sa kusina.”

“May dalawampung tao kang puwedeng utusan.”

“Ikaw ang may plano.”

“At si Marco?”

“Hindi ko trabaho ang dating nobyo mo.”

Masyadong mabilis ang sagot niya. Ngumiti ako. “Hindi ka nagseselos?”

“Hindi.”

“Hindi rin ako.”

“Mabuti.”

Nagtagpo ang mga mata namin nang mas matagal kaysa kailangan. Pagkatapos ay bumalik siya sa kalan at muntik nang masunog ang bawang.

“Hindi ka rin pala magaling magpanggap,” sabi ko.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-8',
      title: 'Paboritong Kanta ni Mama',
      order: 8,
      content: `Nawalan ng kuryente habang inaayos namin ang ilaw sa ballroom. Nagsindi si Gabo ng kandila sa kusina at nagpatuloy maghanda ng hapunan.

May tugtog siyang lumang kundiman sa radyo. Nang mapansin niya akong nakikinig, pinatay niya iyon.

“Paborito ni Mama,” paliwanag niya. “Siya ang nagturo sa akin magluto. Siya rin ang nagpanatili ng hotel noong may sakit si Papa.”

Hindi ko alam na matagal nang nasa pamilya niya ang Amihan.

“Gusto mo bang ibenta nila?”

“Ayokong malugi ang lahat para lang mapanatili ang alaala.”

Sa unang pagkakataon, hindi ako nakakita ng mapang-asar na chef. Nakita ko ang anak na ayaw pumili sa pagitan ng pangarap at pamilya.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-9',
      title: 'Sayaw sa Ilalim ng Kandila',
      order: 9,
      content: `Nang bumalik ang kuryente, tumugtog ulit ang kundiman. Iniabot ni Gabo ang kamay niya.

“Hindi tayo dapat sumasayaw. Maraming kailangang gawin.”

“Isang kanta lang.”

“Chef ka, hindi event host.”

“At ikaw, planner ka. Iplano mo ang isang sayaw.”

Tinanggap ko ang kamay niya. Dahan-dahan kaming umikot sa kusinang wala nang ibang tao. Ang palad niya sa likod ko ay mainit sa manipis kong damit.

“Ligtas ba ang ganitong kalapit?” bulong niya.

“Ikaw ang dapat sumagot. Kusina mo ito.”

Napangiti siya. Hindi kami naghalikan. Pero sa pagitan ng huling nota at unang yabag palayo, parang may ipinangako kaming pareho naming kinatatakutan.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-10',
      title: 'Si Celeste',
      order: 10,
      content: `Kinabukasan, dumating si Celeste—kilalang restaurateur at dating kasama ni Gabo sa culinary school. Maganda siya, kumpiyansa, at alam na alam kung paano tawagin si Gabo sa palayaw na hindi ko pa naririnig.

“Gabs,” bati niya, sabay halik sa pisngi nito.

Napahigpit ang hawak ko sa clipboard.

“Mara,” sabi niya, ipinakilala ako ni Gabo. “Si Celeste. Kaibigan.”

“Kaibigan lang?” biro niya.

“Celeste,” saway nito.

Nakipagkamay ako at ngumiti nang propesyonal. Sa loob-loob ko, gusto kong malaman kung ilang beses na silang sumayaw sa kusina.

Hindi ako nagseselos. Hindi talaga.

Pero nang mag-alok si Celeste na tulungan si Gabo sa menu, nagtanong ako kung puwedeng ako rin ang tumikim.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-11',
      title: 'Dalawang Sarsa',
      order: 11,
      content: `Nagpresenta si Celeste ng sarili niyang menu: moderno, elegante, at napakamahal. Kay Gabo naman, mga pagkaing galing sa kusina ng nanay niya.

“Hindi lahat ng tradisyon kailangang baguhin,” sabi ko.

“Pero kailangan itong kumita,” sagot ni Celeste.

“Kikita kung gusto ng mga tao ang pagkain.”

Tumingin si Gabo sa akin, bahagyang nagulat. Pagkatapos, inihain niya ang dalawang sarsa para tikman ng grupo. Pinili ng lahat ang kaniya.

“Hindi dahil kampi ako,” sabi ko.

“Siyempre.”

“Talagang mas masarap.”

“Iyan ang gusto kong marinig.”

“Huwag mong gawing romantiko ang usapan.”

“Hindi ko kailangan. Ikaw na ang namumula.”`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-12',
      title: 'Ang Susi sa Bodega',
      order: 12,
      content: `Naipit kami sa bodega nang sumara ang lumang pinto sa likod namin. Walang signal, punô ng kahon, at sapat lang ang espasyo para tumayo nang magkatabi.

“Walang ibang paraan palabas?” tanong ko.

“Meron. Tumawag ng maintenance.”

“Walang signal.”

“Kung gayon, maghintay tayo.”

Napansin niyang may alikabok sa buhok ko. Dahan-dahan niya iyong inalis at huminto bago dumampi ang kamay sa pisngi ko.

“Mara.”

“Huwag,” sabi ko, kahit hindi ako umatras.

“Hindi ako gagalaw kung ayaw mo.”

Gusto kong halikan niya ako. Gusto ko ring makaalis muna kami sa bodega. Kaya ngumiti ako. “Paglabas natin, ibabawas ko sa renta ng kusina ang oras na ito.”

Tumawa siya at ibinaba ang kamay.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-13',
      title: 'Mga Salitang Hindi Naisulat',
      order: 13,
      content: `Nang mabuksan ang pinto, nakatanggap ako ng mensahe mula kay Marco: *May kailangan akong sabihin. Tayong dalawa lang.*

Hindi ko sinabi kay Gabo kung bakit ako umalis nang maaga. Hindi ko kailangang ipaliwanag ang bawat hakbang ko, pero hindi ko rin nagustuhan ang katahimikang iniwan ko.

Sa café kami nagkita ni Marco. Binalaan niya ako na hindi raw seryoso ang mga investor sa pangako nilang panatilihin ang hotel.

“Bakit mo sinasabi ito?”

“Ayokong masaktan ka ulit.”

“Hindi ikaw ang magpapasya kung ano ang makasasakit sa akin.”

Nang bumalik ako sa Amihan, nakatayo si Gabo sa pintuan.

“Mabuti ang date?”

“Hindi date.”

“Hindi ko tinanong.”`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-14',
      title: 'Mali ang Hinala',
      order: 14,
      content: `Nag-away kami tungkol sa Marco na para bang may karapatan siyang magtanong at para bang may karapatan akong magtampo.

“Hindi ka kasintahan ko,” sabi ko.

“Alam ko.”

“Kung gayon, huwag mo akong tratuhing may atraso.”

“Hindi ko sinabing may atraso ka.”

“Pero ganyan ang tingin mo.”

Tumalikod siya, huminga nang malalim, saka bumalik sa akin. “Tama ka. Hindi ko alam ang buong kuwento. Nagselos ako at hinayaan kong manghula ang isip ko.”

Hindi ko inaasahan ang pag-amin.

“Hindi ko rin dapat itinago ang sinabi niya,” sabi ko. “Pero gusto kong ako ang magpapasya kung ano ang gagawin.”

“Ikaw dapat.”

Hindi pa kami maayos. Pero sa unang pagkakataon, hindi kami nagtalo para manalo.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-15',
      title: 'Isang Halik, Walang Pangako',
      order: 15,
      content: `Pagkatapos ng mahabang araw, nadatnan ko si Gabo sa rooftop, nakatanaw sa mga ilaw ng Maynila.

“Ayoko ng lihim na laro,” sabi ko. “Kung may gusto kang sabihin, sabihin mo.”

“Gusto kitang halikan.”

Natahimik ako.

“At pagkatapos?” tanong ko.

“Pagkatapos, tatanungin kita kung gusto mo pang isa.”

Napatawa ako nang mahina. “Maayos na sagot.”

“Mara?”

“Sige.”

Lumapit siya nang dahan-dahan, binigyan ako ng pagkakataong umatras. Nang magtagpo ang mga labi namin, malambot ang unang halik, parang tanong. Ang ikalawa ay mas matapang, may init ng mga araw na ginugol naming magkunwaring walang nangyayari.

Ako ang unang humiwalay. “Bukas, trabaho ulit.”

“Oo.”

“At walang pangako.”

“Sa ngayon.”`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-16',
      title: 'Mga Hangganan',
      order: 16,
      content: `Kinabukasan, nag-usap kami bago pa magising ang buong hotel. Gusto kong malinaw ang lahat: walang lihim na pag-angkin, walang selos na nagiging utos, at walang paghalik sa gitna ng trabaho kapag hindi pareho ang gusto.

“Sang-ayon,” sabi ni Gabo. “At kapag may hindi komportable, sasabihin natin.”

“Kahit nakahihiyang sabihin?”

“Lalo na.”

Pinagmasdan ko siya. Hindi siya nagbiro, hindi rin nagreklamo. Hinawakan lang niya ang kamay ko at hinintay ang sagot ko.

“Ayos,” sabi ko.

“Ayos.”

Nang maghiwalay kami, dinampian niya ng halik ang mga buko ko. Simpleng kilos lang iyon. Bakit parang mas nakakakilig kaysa sa halik kagabi?`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-17',
      title: 'Ang Apron Kong Itim',
      order: 17,
      content: `Naging lihim naming biro ang apron. Tuwing pumapasok ako sa kusina, sinasabi ni Gabo na para raw akong tunay na sous-chef. Sinasabi ko namang kulang siya sa tauhang marunong magbasa ng iskedyul.

Isang gabi, tinuruan niya akong maghiwa ng sibuyas. Nasa likod ko siya, ngunit nagtanong muna kung puwede siyang gumabay sa kamay ko.

“Puwede.”

Maingat niyang ipinatong ang mga daliri niya sa ibabaw ng akin. Tinuruan niya akong dahan-dahang gumalaw, pero pareho naming napansin na hindi na kutsilyo ang iniisip namin.

“Mali ang hiwa mo,” bulong niya.

“Ikaw ang nakagagambala.”

“Ako pa?”

Nang matapos ang trabaho, siya ang nagtali ng apron ko at ako ang naghalik sa pisngi niya.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-18',
      title: 'Ang Alaala ni Celeste',
      order: 18,
      content: `Inaya ni Celeste si Gabo na magbukas ng restaurant kasama siya. Nakita ko silang nag-uusap sa may hardin, parehong seryoso, parehong komportable sa isa't isa.

“Bagay kayo,” nasabi ko nang bumalik siya.

“Hindi iyon ang gusto ko.”

“Ano ang gusto mo?”

Lumapit siya ngunit hindi ako hinawakan. “Gusto kong malaman kung nagseselos ka.”

“Hindi.”

“Mara.”

“Kaunti.”

Ngumiti siya, ngunit hindi nang-asar. Ipinaliwanag niyang matagal na silang magkaibigan ni Celeste, pero hindi naging sila.

“At kung may alok siyang mas magandang kinabukasan?”

“Hindi ko pipiliin ang kinabukasan dahil lang mas maganda ang litrato.”

Hindi ko alam kung sapat ang sagot na iyon. Pero pinili kong maniwala muna.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-19',
      title: 'Ang Mensaheng Kumalat',
      order: 19,
      content: `May nag-leak ng draft ng event plan. Sa internet, lumabas ang pribadong badyet at ang mga larawan ng ballroom bago pa matapos ang pagkukumpuni.

Sinabi ni Marco na may kopya siyang nakita sa opisina ng investor. Pinayuhan niya akong sisihin si Gabo—siya lang daw ang may access sa kusina at sa mga supplier.

“Hindi ko siya ibibintang nang walang ebidensiya,” sabi ko.

“Masyado kang nagtitiwala sa kaniya.”

“Mas mabuti iyon kaysa manira nang walang alam.”

Tinawagan ko si Gabo at sinabi ang lahat. Hindi siya nagalit. Humingi siya ng kopya ng mga file para sabay naming alamin kung sino ang may access.

Gusto kong maging tama ang tiwala ko. Mas gusto kong huwag kaming magkamali sa isa't isa.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-20',
      title: 'Ang Unang Malaking Away',
      order: 20,
      content: `Nakita ni Gabo ang mensahe ni Marco sa tablet ko. Hindi niya binasa ang iba, pero sapat na ang pangalan para magbago ang mukha niya.

“Bakit siya may access sa files mo?”

“Siya ang liaison ng investor.”

“Hindi ko sinasabing may kasalanan ka.”

“Pero ganiyan ang tunog.”

Napailing siya. “Hindi ko gustong maging katulad ng dati kong sarili—yung tahimik kapag natatakot, tapos biglang galit.”

“Kung gayon, kausapin mo ako. Huwag ang haka-haka mo.”

Umalis ako para makahinga. Hindi ako sumagot sa tawag niya nang gabing iyon.

Kinabukasan, may iniwang almusal sa mesa ko, walang sulat, walang hinihinging kapalit.

Hindi pa iyon pagpapatawad. Pero simula iyon ng pag-uusap.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-21',
      title: 'Paghingi ng Tawad',
      order: 21,
      content: `Naghintay si Gabo hanggang matapos ang meeting bago humingi ng tawad.

“Nagselos ako at hindi ko dapat ibinuhos iyon sa iyo.”

“Natatakot akong mapagdesisyunan na naman ako ng ibang tao,” sabi ko. “Kaya kapag naririnig ko ang tono mong ganoon, gusto kong tumakbo.”

“Hindi kita hahabulin para pilitin kang manatili.”

“Pero sana habulin mo ako para magtanong kung ligtas ako.”

Tumango siya. Hindi niya ako niyakap agad. Hinintay niyang ako ang lumapit.

Nang yumakap ako, marahan niyang idinikit ang pisngi sa buhok ko.

“Ayoko ng perpektong tayo,” sabi niya. “Gusto ko ng tapat.”

“Mabuti. Hindi ako marunong maging perpekto.”

“Napansin ko.”`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-22',
      title: 'Sa Ilalim ng Ulan',
      order: 22,
      content: `Naabutan kami ng ulan habang nag-uuwi ng mga sample menu. Iisa ang payong at masyadong maliit iyon para sa aming dalawa.

“Mabasa ka na lang,” sabi ni Gabo.

“Hindi ako matutunaw.”

“Sayang. Akala ko may dahilan akong buhatin ka.”

“Subukan mo at ibababa kita sa putikan.”

Tumawa siya at inilapit ang payong. Nagsiksikan kami sa ilalim nito, magkadikit ang balikat at braso. Sa kanto, hinalikan niya ako sa ulan—hindi nagmamadali, hindi nagtatago.

“May makakakita,” bulong ko.

“Gusto mo bang tumigil?”

“Hindi.”

Kaya nagpatuloy kami, habang ang lungsod sa paligid ay nagmamadali at kami lang ang tila may oras.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-23',
      title: 'Gabi ng Pagtikim',
      order: 23,
      content: `Inayos namin ang tasting menu sa pribadong dining room. Dalawa lang ang mesa, kandila, at limang pagkaing pinag-isipan ni Gabo mula sa recipe book ng nanay niya.

“Hindi ito rehearsal,” sabi ko.

“Hindi rin date?”

“Tasting.”

“Sige. Tasting na may kandila.”

Nang matapos ang dessert, inabot niya ang kamay ko. “Gusto mo bang sumama sa akin sa taas?”

Tiningnan ko siya nang mabuti. “Gusto ko. Pero gusto kong malinaw na puwede akong magbago ng isip kahit kailan.”

“Oo. At puwede rin akong magbago ng isip.”

Nang pumayag kaming pareho, hinawakan niya ang kamay ko at naglakad kami palayo sa mga kandila. Isinara niya ang pinto sa likod namin. Naiwan sa ibaba ang musika at mga salitang hindi na kailangang madaliin.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-24',
      title: 'Umagang Walang Takas',
      order: 24,
      content: `Nagising ako sa liwanag at amoy ng kape. Nasa upuan si Gabo, nakasuot ng kamiseta at binabasa ang lumang recipe book.

“Hindi ka tumakas,” sabi niya.

“Hindi pa alas-siyete.”

Inilapag niya ang tasa sa mesa at tinanong kung maayos ba ang lahat. Gusto ko ang pag-aalagang iyon—walang pag-aakalang may utang ako sa kaniya dahil sa gabing magkasama kami.

“Maayos,” sagot ko. “Ikaw?”

“Masaya. Medyo kinakabahan.”

“Bakit?”

“Baka isipin mong gusto ko ng sagot agad.”

Hinawakan ko ang kamay niya. “Gusto ko ng isa pang almusal.”

“Iyan ang pinakamadaling hiling mo sa akin.”

“Tingnan natin kung hindi mo susunugin ang itlog.”`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-25',
      title: 'Ang Totoong Alok',
      order: 25,
      content: `Dumating ang investor na may bagong alok: malaki ang bayad, pero kailangang isara ang lumang kusina at gawing marangyang bar ang ballroom.

“Hindi ko kayang tanggihan ito,” sabi ng may-ari, si Tita Luning.

“Hindi rin natin kailangang tanggapin agad,” sabi ko. “May event na magpapakita kung gaano kahalaga ang Amihan.”

Tumango si Gabo. “Pero kung mabigo tayo, hindi ko kayo sisisihin.”

Iyon ang naging plano: isang gabing bukas sa komunidad, may tiket na abot-kaya, at may pagkain mula sa recipe book ng nanay niya.

Hindi kayamanan ang kailangan naming ipakita. Kailangan naming ipakita kung bakit may mga taong bumabalik.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-26',
      title: 'Ang Huling Pahina',
      order: 26,
      content: `Sa likod ng recipe book, may nakatagong sobre na hindi pa nabubuksan. Sulat iyon ng nanay ni Gabo para kay Tita Luning. May petsa noong isang buwan bago siya mamatay.

Hindi ko binasa. Si Gabo ang nagbukas.

Nakasulat doon na huwag daw ipagbili ang Amihan dahil lang natatakot silang sumubok ng bagong paraan. May listahan din ng mga dating suki, manggagawa, at kapitbahay na tumulong sa pamilya.

“Akala ko gusto niyang manatili kami rito habambuhay,” sabi ni Gabo.

“Baka gusto lang niyang malaman mong may pagpipilian ka.”

Matagal siyang tumingin sa sulat. Pagkatapos, tinawagan niya ang mga dating manggagawa at inanyayahan silang tumulong sa event.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-27',
      title: 'Ang Lihim ni Marco',
      order: 27,
      content: `Nakita ko si Marco na may kausap na kinatawan ng kompanyang bibili sa hotel. Nang makita niya ako, agad siyang ngumiti.

“Nagkataon lang,” sabi niya.

“Bakit may kopya ka ng confidential plan namin?”

“Hindi iyon sa akin galing.”

Hindi ko siya pinaniwalaan. Sinabi ko kay Gabo ang nakita ko, pero ayaw kong magbintang nang walang patunay.

Kinagabihan, nagpadala si Celeste ng dokumentong nagpapakitang binayaran ang kompanya ni Marco para makuha ang plano ng event.

“Akala ko tinutulungan niya ako,” sabi ko.

“Minsan, ang tulong na may kapalit ay hindi tulong,” sagot ni Gabo.

Hindi ako nasaktan dahil nami-miss ko si Marco. Nasaktan ako dahil muli akong naniwala sa taong marunong magkunwari.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-28',
      title: 'Hindi Ako Ililigtas',
      order: 28,
      content: `Gusto ni Gabo na kausapin si Marco agad. Pinigilan ko siya.

“Hindi mo kailangang iligtas ako.”

“Hindi kita inililigtas. Gusto kong managot siya.”

“Kung gayon, hayaan mong ako ang pumili ng paraan.”

Umupo siya sa tapat ko. “Ano ang gusto mong gawin?”

“Ipakita ang ebidensiya sa may-ari at sa investor. Walang sigawan, walang eksena.”

“Sang-ayon.”

Dati, akala ko pagmamahal ang kusang pagsalo sa lahat ng problema ng isang tao. Ngayon, mas gusto ko ang taong nagtatanong kung paano ako matutulungan.

Hinawakan ni Gabo ang kamay ko. “Sabihin mo kung kailangan mo ako.”

“Kailangan kita rito. Sa tabi ko.”

“Diyan ako mananatili.”`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-29',
      title: 'Ang Plano ni Celeste',
      order: 29,
      content: `Inamin ni Celeste na may sarili siyang alok sa mga investor. Gusto niyang gawing restaurant ang Amihan at imbitahan si Gabo bilang chef.

“Hindi ko sinabing ayaw kong iligtas ang hotel,” sabi niya. “Gusto ko lang ng pagkakataon.”

“At ako?” tanong ni Gabo.

“Ikaw ang gusto kong katrabaho. Matagal na.”

Nasa pintuan ako noon, at narinig ko ang lahat.

“Mara,” sabi niya nang mapansin ako.

“Wala akong karapatang pigilan ka.”

“Hindi ka naman niya hinihinging gawin iyon.”

Masakit pa rin. Hindi dahil kay Celeste, kundi dahil maaaring magbago ang buhay ni Gabo at wala akong kontrol doon.

“Pag-usapan natin pagkatapos ng event,” sabi niya.

Tumango ako. Minsan, pagmamahal din ang pagbibigay ng oras para makapagpasya.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-30',
      title: 'Pagsubok sa Kusina',
      order: 30,
      content: `Tatlong araw bago ang event, nagkasakit ang dalawa naming kusinero. Si Gabo ay halos hindi natulog, kaya nagpalit ako ng sapatos at pumasok para tumulong sa paghahanda.

“Marunong ka ba talaga maghiwa?” tanong niya.

“Mayroon akong maraming nakatagong talento.”

“Pangalanan mo ang isa.”

“Hindi ako nagrereklamo habang nagtatrabaho.”

Napangiti siya. Pinaghiwa niya ako ng gulay at pinagbawalan akong lumapit sa mainit na kawali.

Nang matapos ang shift, umupo kami sa sahig ng kusina at nagsalo sa natirang tinapay.

“Salamat,” sabi niya.

“Walang anuman.”

“Hindi lang sa pagkain.”

Ipinatong ko ang ulo ko sa balikat niya. “Alam ko.”`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-31',
      title: 'Ang Damit na Pula',
      order: 31,
      content: `Sa gabi bago ang event, dumating ang damit ko: pula, simple, at masyadong maganda para sa taong magbubuhat pa ng mga kahon kinabukasan.

Nakita ako ni Gabo habang sinusukat iyon.

“Wala ka nang masasabi?” tanong ko.

“Mayroon.”

“Ano?”

“Napakaganda mo.”

Hindi siya nagbiro. Naramdaman kong uminit ang pisngi ko.

“At kailangan mo pang magtrabaho bukas,” dagdag niya.

“Mabuti at naalala mo.”

Inabot niya ang kamay niya, ngunit hindi niya ako hinila. Ako ang lumapit at hinalikan siya.

“Bukas pagkatapos ng event,” bulong ko.

“Maghihintay ako.”

“Huwag kang masyadong kampante.”

“Hindi ako kampante. Umaasa lang.”`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-32',
      title: 'Gabi ng Amihan',
      order: 32,
      content: `Punô ang ballroom bago mag-alas-siyete. Dumating ang mga dating suki, kapitbahay, at dating empleyado. Sa bawat mesa ay may maliit na kard na may alaala nila sa hotel.

Nagsimula ang pagkain sa paboritong sabaw ng nanay ni Gabo. Habang nagsasalita si Tita Luning, nakita kong pinupunasan niya ang mata niya.

Nagtagumpay ang plano, pero hindi dahil perpekto ang dekorasyon. Nagtagumpay ito dahil puno ang silid ng mga taong may dahilan para bumalik.

Nang magtagpo ang tingin namin ni Gabo mula sa kabilang dulo ng ballroom, ngumiti siya.

Sa unang pagkakataon, hindi ko kailangang mag-ayos ng anumang problema. Puwede akong huminga at masiyahan sa gabing pinaghirapan namin.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-33',
      title: 'Ang Pag-amin ni Marco',
      order: 33,
      content: `Dumating si Marco bago matapos ang gabi. Hinarap siya ni Tita Luning at ipinakita ang mga dokumentong ipinadala ni Celeste.

Hindi na siya nakangiti.

“Ginawa ko iyon dahil gusto kong manatili sa trabaho,” paliwanag niya. “Hindi ko alam na isasara nila ang kusina.”

“Pero alam mong confidential ang plano,” sabi ko.

“Mara, pasensya na.”

Hindi ko alam kung totoong pagsisisi iyon o takot lamang na mahuli. Hindi ko na kailangang malaman.

“Hindi ko na kailangan ang paliwanag mo,” sabi ko. “Kailangan mong tanggapin ang magiging resulta.”

Umalis siya nang walang eksena. Hindi ako nakaramdam ng panalo. Nakaramdam ako ng gaan—parang sa wakas, hindi na siya may hawak sa nakaraan ko.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-34',
      title: 'Ang Alok na Hindi Inasahan',
      order: 34,
      content: `Pagkatapos ng event, inalok ni Celeste si Gabo ng posisyon bilang executive chef sa restaurant na binubuo niya. Mas mataas ang sahod, mas malaki ang kusina, at mas malinaw ang kinabukasan.

“Hindi ko pa sasagutin,” sabi niya.

“Dapat pag-isipan mo.”

“Gusto kong manatili sa Amihan. Pero ayokong manatili dahil lang natatakot akong umalis.”

“At ako?”

“Hindi kita isasama sa desisyon ko bilang dahilan. Gusto kong piliin ang trabaho dahil gusto ko iyon.”

Gusto kong sabihin na manatili siya. Sa halip, sinabi kong, “Pumili ka para sa sarili mo. Kaya kong harapin ang sagot.”

Hinawakan niya ang kamay ko. “Iyan ang dahilan kung bakit mahalaga sa akin ang opinyon mo.”`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-35',
      title: 'Isang Linggong Layo',
      order: 35,
      content: `Nagpunta ako sa Visayas para sa isang linggong trabaho. Bago ako sumakay, hinalikan ako ni Gabo sa noo.

“Miss na kita agad,” sabi niya.

“Hindi pa ako nakakaalis.”

“Nagpa-practice lang.”

Sa unang mga araw, nagpadala kami ng litrato ng pagkain at maiikling mensahe. Sa ikatlong araw, hindi siya nakasagot nang ilang oras dahil may problema sa supply. Nagsimulang mag-imbento ng kuwento ang isip ko.

Sa halip na magtampo, tinawagan ko siya.

“Busy ako, pero ayos lang ako,” sabi niya.

“Salamat sa pagsabi.”

“Salamat sa pagtawag.”

Hindi kailangan ng pag-aaway para patunayang may pakialam kami.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-36',
      title: 'Ang Pinili Niya',
      order: 36,
      content: `Pagbalik ko, sinabi ni Gabo na tinanggihan niya ang alok ni Celeste. Nakipagkasundo siya kay Tita Luning na palawakin ang kusina at magpatakbo ng maliit na restaurant sa loob ng Amihan.

“Sigurado ka?” tanong ko.

“Oo. Hindi dahil nandito ka. Gusto kong buuin ito.”

“At kung lumipat ako ng trabaho?”

“Gagawa tayo ng paraan. Hindi ko gustong maging dahilan para paliitin mo ang mundo mo.”

Gusto ko ang sagot na iyon, kahit hindi ko alam kung paano ko iyon sasabihin.

“Proud ako sa iyo,” sabi ko.

“Proud din ako sa iyo.”

Hinalikan niya ako sa gitna ng kusina. May sumipol na kusinero mula sa likod.

“May manonood,” sabi ko.

“Hayaan mo silang mainggit.”`,
    },
    {
      id: 'sample-kusina-37',
      title: 'Hindi Na Lihim',
      order: 37,
      content: `Naglabas si Tita Luning ng pahayag na mananatiling bukas ang Amihan. Hindi na kailangang magkunwari nina Gabo at ako na trabaho lang ang dahilan kung bakit lagi kaming magkasama.

“Kayo na ba?” tanong ng receptionist.

Tumingin ako kay Gabo.

“Kung gusto mo,” sabi niya.

“Gusto ko.”

“Kung gayon, oo.”

Hindi niya ako tinanong kung kanya na ba ako. Hindi rin niya ako tinawag na kanya. Magkasama lang kaming ngumiti, parehong malaya at parehong pinipili ang isa't isa.

Pagkatapos, inagaw niya ang huling piraso ng bibingka sa mesa.

“Iyan ang unang away natin bilang magkasintahan,” sabi ko.

“At panalo ako.”

“Hindi pa tapos ang laban.”`,
    },
    {
      id: 'sample-kusina-38',
      title: 'Sa Saradong Kusina',
      order: 38,
      content: `Isang buwan matapos ang pagbubukas, nagkaroon kami ng unang gabing walang bisita, walang meeting, at walang sunog na kailangang patayin.

Pagkatapos magsara ang restaurant, sinindihan ni Gabo ang maliliit na ilaw sa kusina at nagpatugtog ng kundiman.

“Isa na namang sayaw?” tanong ko.

“Kung papayag ka.”

Hinubad ko ang sapatos at inilagay ang mga kamay sa balikat niya. Dahan-dahan kaming umikot sa sahig.

“Mainit pa rin dito,” sabi ko.

“Hindi lang dahil sa kalan.”

Natawa ako at hinalikan siya. Ang halik ay naging mas malalim, ngunit nang huminto ako para huminga, huminto rin siya.

“Gusto mo bang umuwi?” tanong niya.

“Gusto kong magtagal pa rito.”

Ngumiti siya at hinila ako sa yakap niya.`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-39',
      title: 'Ang Bagong Plano',
      order: 39,
      content: `Makalipas ang ilang buwan, nakatanggap ako ng alok na pamunuan ang isang malaking festival sa ibang lungsod. Maganda ang oportunidad at matagal ko nang pinapangarap.

Kinabahan akong sabihin kay Gabo.

“Dapat mong tanggapin,” sabi niya.

“Hindi mo ba ako mamimiss?”

“Siyempre. Pero ayokong maging kulungan ang pagmamahal.”

Nagplano kami ng mga pagbisita, tawag, at mga araw na walang trabaho. Walang garantiya na magiging madali. Mayroon lang kaming tiwala na puwede kaming magsabi kapag nahihirapan.

“Hindi ako aalis para iwan ka,” sabi ko.

“Alam ko. Aalis ka para sa sarili mo.”

Hinalikan niya ako sa noo. “At kapag bumalik ka, may pagkain akong ihahanda.”

“Siguraduhin mong hindi sunog.”`,
    },
    {
      id: 'bawal-mahulog-sa-kusina-40',
      title: 'Walang Bawal sa Kusina',
      order: 40,
      content: `Isang taon pagkatapos ng unang pagtatalo namin, bumalik ako sa Amihan mula sa festival. Nasa kusina si Gabo, may sandok sa isang kamay at ngiti sa labi.

“Late ka,” sabi niya.

“May traffic.”

“May dahilan ka lagi.”

“At may pagkain ka lagi.”

Inabot niya sa akin ang apron kong itim. Hindi na ako nagpanggap na hindi ko iyon nami-miss. Itinali niya ito sa baywang ko at hinalikan ako sa batok, marahan at may pahintulot na nabuo sa lahat ng pag-uusap namin.

“Miss na miss kita,” bulong niya.

“Ako rin.”

Sa labas, umuulan. Sa loob, mainit ang kusina at mas mainit ang halik niya. Hindi namin kailangang magmadali. Walang bawal sa kusina, maliban sa mga bagay na hindi namin parehong gusto.

At sa pag-ibig namin, ang pinakamagandang sangkap ay nanatiling pareho: tiwala, katapatan, at ang kalayaang pumili sa isa't isa—araw-araw.`,
    },
  ],
  'sample-finally': [
    {
      id: 'when-we-finally-meet-1',
      title: 'A Match Across the Sea',
      order: 1,
      content: `Alex's POV

I was in Mindanao when I found her profile on a dating app. Visayas was a long way from my part of Mindanao, but distance didn't feel important while I was staring at her photos and trying to think of an opening line.

I sent a message. Then another when she didn't answer.

No reply.

I told myself to stop. A little later, I sent one more—something silly, anything that might make her notice me. I wasn't trying to be cruel or force her to answer. I was an awkward guy with a crush and no idea how to make an impression.

I didn't know her yet. I only knew her name Mia.

I had no idea that the girl whose attention I was trying so hard to get would become the person whose messages I checked for every day.`,
    },
    {
      id: 'when-we-finally-meet-2',
      title: 'The Messages She Ignored',
      order: 2,
      content: `Mia's POV

Alex kept appearing in my notifications. I wasn't sure what to make of him, so most of the time I left his messages unanswered.

Then he sent another message. And another. He seemed determined to make me laugh, even when I gave him almost nothing back.

I could have blocked him. Instead, I found myself wondering what he would say next. There was something ridiculous and strangely endearing about how he kept trying to get my attention without pretending he was too cool to care.

One day, I decided to give him a chance—but not with a serious conversation. I sent him an invitation to play Mobile Legends.

If he was as persistent in a game as he was in my inbox, at least I would find out quickly.`,
    },
    {
      id: 'when-we-finally-meet-3',
      title: 'One Game Became Many',
      order: 3,
      content: `Alex's POV

When Mia asked if I wanted to play Mobile Legends, I answered so quickly that she teased me for waiting by my phone.

“I was not waiting,” I said.

“You replied in two seconds.”

“Good signal,” I said, and she laughed.

That first game turned into another. We started talking between matches—where we lived, what we did all day, what made us laugh. After about a week, the chat no longer felt like two strangers making small talk. We were learning each other's habits, stories, and little moods.

She was in Visayas. I was in Mindanao. But while we played side by side on a screen, the distance felt like one small detail instead of a wall.`,
    },
    {
      id: 'sample-finally-4',
      title: 'A Week of Learning',
      order: 4,
      content: `Mia's POV

After a week of chatting, I knew Alex's jokes, the way he celebrated a win in Mobile Legends, and how quickly he blamed the lag when a match went badly.

He learned that I could be quiet when I was tired and talk nonstop when something made me excited. We traded stories about our days, our families, our favorite things, and the places we hoped to see.

He was in Mindanao; I was in Visayas. We couldn't just meet after a game, so we kept learning each other through messages and calls.

I had expected to get bored. Instead, I started looking forward to seeing his name appear on my screen.`,
    },
    {
      id: 'sample-finally-5',
      title: 'The Question After a Month',
      order: 5,
      content: `Alex's POV

By the time a month had passed, Mia had become part of my everyday life. We played Mobile Legends whenever our schedules lined up, teased each other over bad matches, and talked long after we had finished playing.

I liked how comfortable I felt with her. I didn't have to invent a better version of myself to keep her interested. I could be nervous, corny, and honest—and she still stayed on the call.

One night, after a game, I took a breath and asked if I could court her.

The question hung between us longer than any loading screen.

“You know we're far apart,” she said.

“I know. I still want to show you that I mean this.”

She didn't give me a movie-perfect answer. She gave me a chance to keep showing up. That was enough to make my whole world feel brighter.`,
    },
    {
      id: 'sample-finally-6',
      title: 'The Smallest Delay',
      order: 6,
      content: `Our first real fight began with a missed call.

I had promised to ring after dinner. A relative asked me to help with something, and I lost track of time. When I finally messaged, Mia had already spent an hour wondering whether I had changed my mind about us.

“You could have sent one text,” she said.

“I know. I’m sorry.”

“You always say you’re sorry after I’m already hurt.”

The words stung because they were partly true. I wanted to explain. She wanted to know she mattered before the explanation arrived.

We ended the call without saying goodnight.`,
    },
    {
      id: 'when-we-finally-meet-7',
      title: 'The Morning After',
      order: 7,
      content: `The next morning, I typed three different apologies and deleted them. None of them asked what she had actually felt.

So I called.

“I made you wait and then left you to guess,” I said. “I should have sent one message. I wasn't ignoring you, but I understand why it felt that way.”

Mia was quiet for a moment. “I could have asked instead of deciding you didn't care.”

We didn't solve every worry in one conversation. We agreed on one small thing: if plans changed, we'd tell each other. If fear started filling in the blanks, we'd ask before believing it.`,
    },
    {
      id: 'when-we-finally-meet-8',
      title: 'The Call That Froze',
      order: 8,
      content: `A week later, the connection froze while Mia was telling me about her day. Her mouth stopped mid-sentence. The screen went dark.

I called back. No answer.

My mind began collecting old fears, arranging them like evidence. Maybe she was tired of repeating herself. Maybe she had finally realized that a relationship on a screen was too much work.

Then her message arrived: *The signal dropped. I'm trying again.*

I stared at those words and felt embarrassed by the story I had invented.

When she called, I told her the truth. She didn't laugh. She said she had done the same thing before.`,
    },
    {
      id: 'when-we-finally-meet-9',
      title: 'Rules for Overthinking',
      order: 9,
      content: `We made no grand promise to never overthink again. We were too honest for that.

Instead, we made a rule: a late reply wasn't proof of a fading love. A short message wasn't automatically anger. If either of us felt unsure, we would say, *I'm overthinking—can you tell me what you meant?*

It sounded almost too simple. It wasn't.

Some nights, I still read Mia's punctuation like a weather report. Some days, she still heard distance in my silence. But we got better at naming the fear before it became an accusation.`,
    },
    {
      id: 'when-we-finally-meet-10',
      title: 'The Money I Wouldn’t Borrow',
      order: 10,
      content: `My family offered to pay for my trip to Visayas. They wanted to help, and I was grateful. Still, the thought of arriving in Mia's hometown with no work and money I hadn't earned made my chest tighten.

I wanted to travel from Mindanao to Visayas with my own money. I wanted to meet Mia's family, look them in the eye, and introduce myself as someone working toward a future—not someone who expected her parents to carry me.

It wasn't that I thought I had to be rich to deserve her. I was embarrassed by the idea of facing her family without a job, and I wanted to be able to say I had paid my own way.

When I told Mia, she listened.

“You don't have to prove your worth to me,” she said.

“I know. This is something I want to do for myself. I want to stand in front of your family feeling like I tried my best.”`,
    },
    {
      id: 'when-we-finally-meet-11',
      title: 'A Job Search of One',
      order: 11,
      content: `I sent applications in the morning and checked for replies all afternoon. Most days, nothing came back. A few times, I made it to an interview and came home with a polite rejection.

Each rejection seemed to add another mile between Mia and me.

She tried to encourage me, but I sometimes heard pity where there was only kindness. Once, when she said, “Your time will come,” I snapped that she didn't know how hard it was.

She didn't argue.

Later, I apologized. She told me she was on my side, not keeping score of how fast I succeeded.`,
    },
    {
      id: 'when-we-finally-meet-12',
      title: 'Not a Deadline',
      order: 12,
      content: `I started treating the trip like a deadline. Every day without a job felt like another day I had failed Mia.

She noticed the way I turned every conversation back to money and applications.

“I miss you,” she said one night. “But I don't want our whole relationship to become a countdown.”

I wanted to defend myself. Instead, I heard how tired she sounded.

We talked about other things again: the funny neighbor, the meal she had learned to cook, the song I couldn't stop playing. Our future mattered. So did the present we were already sharing.`,
    },
    {
      id: 'when-we-finally-meet-13',
      title: 'The Photo With No Context',
      order: 13,
      content: `Mia sent me a picture from a family lunch: her cousins crowded around a table, someone caught mid-laugh. I saw a comment from a man I didn't recognize and asked who he was.

“My cousin's friend,” she said.

I told myself I was only curious. Then I asked why she was sitting beside him. The question sounded smaller in my head than it did out loud.

Mia's face changed. “Are you asking because you want to know, or because you already think something happened?”

I didn't have a good answer.`,
    },
    {
      id: 'when-we-finally-meet-14',
      title: 'Jealousy Has a Quiet Voice',
      order: 14,
      content: `I was embarrassed by my jealousy, so I tried to disguise it as a joke. Mia didn't laugh.

“You can tell me when you're insecure,” she said. “Just don't make me defend myself for having a normal day.”

She was right. My fear had turned an ordinary photo into a trial she never agreed to attend.

I apologized without asking her to reassure me first. Then I told her what had actually scared me: that while I was still trying to build a way to reach her, someone nearby could simply show up.

“Being near me isn't the same as knowing me,” she said. “But you do know me.”`,
    },
    {
      id: 'when-we-finally-meet-15',
      title: 'The Fight About a Heart',
      order: 15,
      content: `A heart emoji on one of my posts started our next argument. Mia thought I had been flirting. I thought she knew I used the same reaction for everyone.

We each defended our intentions instead of listening to the hurt underneath.

“It was nothing,” I said.

“It wasn't nothing to me.”

The silence that followed was familiar and awful. This time, I stopped myself from ending the call just to escape it.

“Can we start again?” I asked. “I want to understand why that hurt.”

She took a breath. “Yes. And I want to explain without assuming the worst.”`,
    },
    {
      id: 'when-we-finally-meet-16',
      title: 'The Apology That Stayed',
      order: 16,
      content: `We both had to admit that love didn't make us mind readers. Mia told me she feared being taken for granted. I told her I feared being the person who always promised more than he could give.

We agreed on clearer boundaries and honest words. If something felt wrong, we would talk about the thing itself—not bring every old fight into the room.

Afterward, Mia said, “I don't want us to be perfect.”

“Good,” I said. “I don't know how.”

“I want us to come back and repair things.”

That was a promise I could actually keep.`,
    },
    {
      id: 'when-we-finally-meet-17',
      title: 'A Bad Week',
      order: 17,
      content: `A week of rejections and family responsibilities left me with little patience. Mia was busy too. Our calls became shorter; our messages became practical.

One night, she asked if I still wanted to meet.

The question hurt. “Of course I do.”

“Then why do you sound like I'm another problem you have to solve?”

I had no answer that would make the words disappear.

We took a day to cool down. It was the longest silence we'd had, and it taught me that taking space should not mean making the other person guess whether the relationship still existed.`,
    },
    {
      id: 'when-we-finally-meet-18',
      title: 'A Message Before Sleep',
      order: 18,
      content: `Before sleeping, I sent one message: *I still love you. I'm overwhelmed, not leaving. Can we talk tomorrow?*

Mia replied with a heart and the same truth from her side.

When we spoke, I admitted I had been ashamed of my situation. I had let that shame turn into distance, then blamed the distance on everything else.

She said she didn't need a polished version of me. She needed the real one—the one who could say, *I don't know yet, but I'm trying.*

For the first time in weeks, my shoulders loosened.`,
    },
    {
      id: 'when-we-finally-meet-19',
      title: 'The Interview',
      order: 19,
      content: `The interview was for a modest job with steady hours. I wasn't sure I was qualified, but I went anyway. I ironed my best shirt and rehearsed answers until even my reflection looked tired.

Afterward, I called Mia from the sidewalk.

“How did it go?”

“I think I was honest.”

“That's a good start.”

For once, she didn't ask whether I got the job. Neither did I.

We talked about the walk home. I told her the interview room had a plant that looked nearly dead. She laughed, and the day became something other than a verdict.`,
    },
    {
      id: 'when-we-finally-meet-20',
      title: 'No Answer Yet',
      order: 20,
      content: `Three days passed. Then a week. No offer came.

I checked my phone more often than I wanted to admit, hoping for a message from an employer and one from Mia. The silence from the job search felt personal, even though I knew it wasn't.

When Mia asked how it went, I tried to joke.

“Maybe they lost my number.”

“Then send them another application,” she said gently. “You don't have to turn one no-answer into the whole story.”

She was right. I opened the job page again. I didn't have good news yet, but I still had the choice to try tomorrow.`,
    },
    {
      id: 'when-we-finally-meet-21',
      title: 'The First Small Saving',
      order: 21,
      content: `I started setting aside whatever I could without pretending the amount was more than it was. Some weeks, there was nothing to save. Other weeks, a little went into an envelope marked CEBU.

It wasn't a paycheck from the job I still hoped to find. It was simply a beginning—small money gathered carefully when I could manage it.

Mia asked if I was sure I didn't want her to help.

“I want us to share our life,” I said. “I just want to do this part with my own hands.”

“Then I'll cheer from here.”

She didn't ask me to hurry. Somehow, that made me want to keep going more than pressure ever had.`,
    },
    {
      id: 'when-we-finally-meet-22',
      title: 'Meeting Her Family',
      order: 22,
      content: `The thought of meeting Mia's family made me nervous in a new way. I imagined questions about my work, my plans, and what I could offer her.

“They're not an exam,” Mia said.

“I know.”

“And you don't have to arrive as someone who has everything figured out.”

I wanted to believe her. I also wanted to show up with enough self-respect to look them in the eye.

So I kept looking for work, saved what I could, and practiced introducing myself without apologizing for my life before anyone had even asked about it.`,
    },
    {
      id: 'when-we-finally-meet-23',
      title: 'The Ticket Page',
      order: 23,
      content: `We opened the travel site together on a call. Mia read the options while I checked my budget. The dates kept changing as work schedules and prices refused to cooperate.

“There's no rush,” she said.

“I know. I just want it to be real.”

We chose a possible month and started planning around it. Nothing was booked yet, but the idea had a shape now.

When we ended the call, I looked at my savings note. The number was small.

It was also mine, and it was moving.`,
    },
    {
      id: 'when-we-finally-meet-24',
      title: 'A Month of Ordinary',
      order: 24,
      content: `The next month was ordinary in ways I had once overlooked. Job applications, errands, family dinners, sleepy calls. Mia sent me pictures of the sky. I sent her a voice message about a customer who had mistaken me for someone else.

We still missed each other. We still sometimes misunderstood a tone or a pause.

But we stopped treating every hard day as a sign that we were failing.

Love wasn't only the dramatic countdown to a first meeting. It was also remembering to ask how the other person slept, and staying kind when the answer was, “Not very well.”`,
    },
    {
      id: 'when-we-finally-meet-25',
      title: 'The Plan Changes',
      order: 25,
      content: `A family responsibility and another delay in finding work pushed our possible dates back. I stared at the calendar, feeling as if the distance had won again.

Mia was disappointed too. She didn't pretend otherwise.

“I'm sad,” she said. “But I'm not angry at you for having a job.”

I had expected her to hide her feelings so I wouldn't feel guilty. Instead, she trusted me with them.

We looked at the new options together. The delay became a problem we could solve, not a mistake one of us had to pay for.`,
    },
    {
      id: 'when-we-finally-meet-26',
      title: 'The Honest Conversation',
      order: 26,
      content: `One night, I admitted what I had been too proud to say: I was afraid that when I finally stood in front of Mia's family, they would see my unfinished life and decide I wasn't enough.

“You are not a résumé,” she said.

“I know, but—”

“And I won't ask you to earn the right to love me.”

I closed my eyes. I had wanted to give her a good first impression. I had almost turned that wish into a belief that I had to be complete before I could show up.

She reminded me that a job was a step, not a measure of my worth.`,
    },
    {
      id: 'when-we-finally-meet-27',
      title: 'The Apology We Owed Ourselves',
      order: 27,
      content: `We talked about the ways we had made fear heavier for each other. I had gone quiet when I felt ashamed. Mia had sometimes assumed silence meant I was pulling away. We had both tried to protect ourselves by guessing.

“I'm sorry we made every delay feel like somebody's fault,” I said.

“Me too.”

We agreed to keep the goal, but let the path breathe. We would share updates, not demand proof. We would celebrate progress, even if it wasn't a plane ticket yet.

That night, we fell asleep on the call with no dramatic words between us. Just the comfort of staying.`,
    },
    {
      id: 'when-we-finally-meet-28',
      title: 'The Savings Envelope',
      order: 28,
      content: `The envelope where I kept my travel savings was no longer empty, but it was nowhere near enough for the trip I imagined. Work was still uncertain, and some days I had to use what little I had saved for more immediate needs.

I showed Mia what remained on a video call.

“It's okay if it takes time,” she whispered.

“I just wish I could tell you when.”

“We'll choose a date when I can make the promise without guessing.”

The money wasn't a grand gesture meant to buy her affection. It wasn't proof that I deserved her, either. It was a goal I was still working toward, one careful step at a time.

I was proud—not because I had solved everything, but because I hadn't stopped trying.`,
    },
    {
      id: 'when-we-finally-meet-29',
      title: 'One More Goodnight',
      order: 29,
      content: `One night, we talked about what the day of our first meeting might be like. We joked about what could go wrong: a delayed trip, a confusing terminal, me forgetting how to speak.

“You won't have to say anything,” Mia said. “You can just hug me.”

I smiled, then grew quiet.

“What if it's awkward?”

“Then we'll be awkward together.”

That was the first time the meeting felt less like a scene I had to perform and more like a moment we could simply live through—whenever it became possible.

We didn't book anything that night. There was no date to circle yet, no ticket waiting in my inbox. Before we hung up, she said, “Goodnight, Alex.”

For once, not knowing the date didn't make the hope feel empty.`,
    },
    {
      id: 'when-we-finally-meet-30',
      title: 'Our Happy Beginning',
      order: 30,
      content: `Two years after I first sent Mia a message, I still hadn't stood beside her. She was in Visayas; I was in Mindanao. The distance between us had not disappeared just because we had learned how to love each other through a screen.

I still didn't have everything figured out. I was looking for work and setting aside what I could for the trip. My family had offered to help, and I was grateful. But I wanted to earn the fare myself—not because Mia demanded it, but because I wanted to meet her family feeling proud of the effort I had made.

We had our small fights and overthought short replies. But we were getting better at asking instead of guessing, laughing after a silly argument, and saying sorry before bedtime. The hard moments were real, but they never erased the good ones: her laugh through my phone, our late-night chats, and all those Mobile Legends matches that somehow became our favorite way to spend time together.

That night, we played Mobile Legends. Mia won the match and celebrated like she had just won a championship.

“You only won because I let you,” I said.

“Sure, Alex,” she teased. “Tell yourself that.”

I laughed. Then we started talking about the day we'd meet: what we'd eat, where we'd go, and how long our first hug would last. We didn't have a date yet, but now it felt like a plan we could look forward to—not a test we had to pass.

“I'll keep saving,” I told her. “And when I'm ready, I'll come to Visayas and meet your family.”

“I'll be waiting,” she said, smiling. “But for now, you still owe me a rematch.”

“Tomorrow?”

“Tomorrow.”

When the call ended, I was still in Mindanao and she was still in Visayas. But I wasn't staring sadly at the miles between us. I was grinning at my phone, already looking forward to tomorrow's game—and to the day when I could finally trade a screen-side victory dance for the real hug we'd been saving.

We hadn't met yet. We were still making our way there, together. And that was a happy beginning.`,
    },
  ],
  'sample-read-me-when-you-need-me': [
    {
      id: 'read-me-when-you-need-me-1',
      title: 'Read This When You Miss Me',
      order: 1,
      content: `Hi, Hanie.

If you opened this because you miss me, then I want you to know that I miss you too. I wish I could close the distance between Mindanao and Visayas with one step. I wish I could be beside you instead of sending this through a screen.

But even from far away, you're part of my everyday life. You're in the messages I look forward to, the games I want to play with you, and the little things I see and think, “I should tell her about this.”

Take a breath, love. We may be apart tonight, but you don't have to carry the missing alone. I'm thinking of you, and I'm still choosing you.`,
    },
    {
      id: 'read-me-when-you-need-me-2',
      title: 'Read This After a Hard Day',
      order: 2,
      content: `You made it through today, Mia. Maybe it didn't go the way you hoped. Maybe you're tired of being strong, answering people, or pretending that everything is fine.

You don't have to be cheerful for me. You don't have to turn a bad day into a lesson before you can rest. You can tell me what happened, or we can talk about something completely different. I can listen, stay on the call, or let you have quiet.

For now, please be gentle with yourself. Drink some water, take a breath, and remember that one difficult day doesn't define you. I wish I could bring you comfort in person. Until then, I'm here—one message, one call, one day at a time.`,
    },
    {
      id: 'read-me-when-you-need-me-3',
      title: 'Read This When You’re Overthinking',
      order: 3,
      content: `If your thoughts are running ahead of us, pause here with me.

A late reply doesn't automatically mean my feelings changed. A short message doesn't always hide anger. Sometimes life gets busy, the signal gets bad, or one of us simply doesn't know the perfect words yet.

You can ask me what I meant. You don't have to guess alone or feel embarrassed for needing reassurance. I'll do my best to answer honestly, and I'll try to make sure my actions match what I say.

We won't understand everything perfectly every time. We can still choose to talk, listen, and find our way back to each other. You're important to me, Mia—not only when everything is easy, but on the days your mind needs a little extra kindness too.`,
    },
    {
      id: 'read-me-when-you-need-me-4',
      title: 'Read This After We Argue',
      order: 4,
      content: `I don't like it when we fight, especially over something small that somehow grew bigger than either of us meant it to. But an argument doesn't erase the good in us, and it doesn't mean I want to stop choosing you.

When we're both ready, I want to understand what hurt—not just prove that I was right. I'll try to own my part without making excuses. I hope we can give each other room to explain, apologize, and begin again.

We are two people learning how to love each other across distance. We may get things wrong. What matters to me is that we keep treating each other with care and keep trying to repair what we can.

I'm still on your team, Mia. Let's find our way back to the same side.`,
    },
    {
      id: 'read-me-when-you-feel-insecure-5',
      title: 'Read This When You Feel Insecure',
      order: 5,
      content: `You don't have to compete with anyone to matter to me. I don't want you to feel that you need to be perfect, always available, or endlessly happy to keep my love.

I like you as you are: the person who gave a persistent stranger a chance, invited him to play Mobile Legends, and slowly let him become part of her days. I like your own thoughts, your sense of humor, and the way our conversations feel like ours.

If something makes you unsure, tell me. I may not always find the perfect answer right away, but I want to understand. You deserve honesty, respect, and affection that doesn't make you feel small.

Please remember: you are not a replaceable name on my screen. You are Mia, and I'm grateful that I get to know you.`,
    },
    {
      id: 'read-me-when-you-need-a-laugh-6',
      title: 'Read This When You Need a Laugh',
      order: 6,
      content: `Remember when one Mobile Legends game turned into our way of spending time together? I still think it's funny how a match can make us celebrate, complain about lag, and suddenly forget what we were talking about before we queued.

You are allowed to brag when you win. I am also allowed to say you only won because I was being nice.

If you're smiling right now, good. If not, imagine me trying to defend that excuse after losing again. You know I would.

I hope we get many more matches, silly arguments, and little moments that belong only to us. And when we finally play in the same room, I reserve the right to blame the Wi-Fi in person.`,
    },
    {
      id: 'read-me-when-the-distance-hurts-7',
      title: 'Read This When the Distance Hurts',
      order: 7,
      content: `I know a phone can't replace being together. A call can't give you the hug I wish I could give you, and a message can't make Visayas and Mindanao feel close.

I won't pretend the distance is always easy. I miss the ordinary things we haven't had the chance to do yet: sit beside each other, share a meal, laugh without watching a screen.

I'm working toward the day I can make the trip with money I've earned myself. I want to meet your family feeling proud that I did my best to get there. It may take time, but the effort is real.

Until that day, let's keep building the little bridge we already have: our conversations, our patience, our games, and the way we keep showing up for each other.`,
    },
    {
      id: 'read-me-when-you-cant-sleep-8',
      title: 'Read This Before You Sleep',
      order: 8,
      content: `It's late, Mia. You don't have to solve tomorrow tonight.

Let the unfinished thoughts wait beside you instead of asking them all to become answers. You did what you could today. If something still needs fixing, we can talk about it when we're rested.

I wish I could say goodnight beside you, but for now I'll send it from here: I hope your shoulders relax, your mind grows quiet, and your sleep is gentle.

Thank you for being part of my life. Thank you for the messages, the laughter, the patience, and every match we played together.

Close your eyes, love. I'll be thinking of you. Goodnight.`,
    },
    {
      id: 'read-me-when-you-doubt-yourself-9',
      title: 'Read This When You Doubt Yourself',
      order: 9,
      content: `You are allowed to take your time figuring things out. You don't need to have every answer today, and you don't need to measure your worth by how much you finished or how confident you felt.

I see how much you care, even in the little things. I see the person behind the days when you feel uncertain. You deserve patience from yourself, too.

If you make a mistake, it doesn't turn you into a mistake. If a plan changes, it doesn't mean you have failed. Rest, begin again, and ask for help when you need it.

I believe in you—not because I expect you to be perfect, but because I know you can keep going in your own way. I'm proud to be someone who gets to cheer for you.`,
    },
    {
      id: 'read-me-when-you-want-to-know-10',
      title: 'Read This When You Wonder Why I Chose You',
      order: 10,
      content: `I chose you in the small moments before I knew what our story would become.

I chose to keep talking after you gave that persistent guy a chance. I chose to look forward to our games. I chose to learn what made you laugh and what made you quiet. And after a month, when I asked if I could court you, I chose to be honest about how much I liked you.

I still choose you now—not because distance is easy, or because we never misunderstand each other, but because what we share matters to me.

You make ordinary parts of my day feel warmer. I like being the person you can talk to, and I want to keep earning that trust. That's why, Mia. Not one grand reason. A hundred little ones.`,
    },
    {
      id: 'read-me-when-you-need-to-smile-11',
      title: 'Read This When You Need to Smile',
      order: 11,
      content: `Picture us on a call after a match. One of us is insisting the result doesn't count. The other is pretending to be humble and failing completely.

Then we start talking about something else, and somehow I forget the score. That is one of my favorite things about us: we can begin with a game and end up sharing a whole piece of our day.

I hope you smile when you remember that we began with my messages, your decision to play, and one week that turned into a month—and then into all this.

Thank you for letting me be part of your days. I hope I can keep making you laugh, even if I have to lose a few more matches to do it.`,
    },
    {
      id: 'read-me-when-we-finally-meet-12',
      title: 'Read This When We Finally Meet',
      order: 12,
      content: `When this day comes, I don't need a perfect speech. I just want to see you, say your name without a screen between us, and give you the hug we've talked about for so long—if that's what you still want in that moment.

I'll probably be nervous. I might laugh at the wrong time or forget the clever things I planned to say. That's okay. You can laugh with me.

I want to meet your family with respect and with the honest effort I've made to get there. I don't have to pretend my life is perfect. I only have to show up as myself and treat the people you love with care.

Until then, this is a promise of hope, not a deadline. I love the life we're building one conversation at a time. And I can't wait for the day we get to make a memory in the same place.`,
    },
  ],
};

export function getSampleChapters(storyId: string): StoryChapter[] | undefined {
  return SAMPLE_STORY_CHAPTERS[storyId];
}
