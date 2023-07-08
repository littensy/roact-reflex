import { UseProducerHook, useProducer } from "@rbxts/react-reflex";
import { RootProducer } from "../producer";

export const useAppProducer: UseProducerHook<RootProducer> = useProducer;
