import { generateText } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-3-flash-preview"),
      prompt: `Prepare questions for a job interview.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]
        
        Thank you! <3`,
    });

    const parsedQuestions = JSON.parse(questions);

    const interview = {
      role,
      type,
      level,
      techstack: techstack.split(","),
      questions: parsedQuestions,
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    const docRef = await db.collection("interviews").add(interview);

    // 🔥 START VAPI CALL HERE
    const vapiResponse = await fetch("https://api.vapi.ai/call", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.VAPI_PRIVATE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assistantId: "d7b0177b-70b9-4233-a6f0-f0e10df3a26f",

        workflowId: "be01d6f2-db7f-4df7-9487-d5d139a6f83e",

        input: {
          questions: parsedQuestions.join(". "),
          username: "Candidate",
          role: role
        },

        metadata: {
          interviewId: docRef.id,
          userId: userid,
        }
      }),
    });

    const vapiData = await vapiResponse.json();

    return Response.json(
      {
        success: true,
        interviewId: docRef.id,
        vapiCall: vapiData,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Thank you!" }, { status: 200 });
}