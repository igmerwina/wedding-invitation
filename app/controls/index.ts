import { ActionFunction, json, LoaderFunction } from "remix";
import {
  appendMessage,
  getMessage,
  getPersonRemarks,
  MessageItemType,
  getBothLocation,
} from "~/utils/googleSheetsApi";

export interface LoaderDataType {
  isBoth: string;
  remark: string;
  messages: MessageItemType[];
}

export const indexLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const recipient = url.searchParams.get("to") || "";

  const [bothLocation, recipientRemarks, messages] = await Promise.all([
    getBothLocation(recipient),
    getPersonRemarks(recipient),
    getMessage(),
  ]);

  return json<LoaderDataType>({
    isBoth: bothLocation?.isBoth || recipient,
    remark: recipientRemarks?.remarks || recipient,
    messages,
  });
};

export const indexAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const message = formData.get("message");

  if (typeof name !== "string" || typeof message !== "string") {
    return { ok: false };
  }

  const success = await appendMessage(name, message);
  return { ok: success };
};
