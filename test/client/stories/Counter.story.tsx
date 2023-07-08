import { ReflexProvider, useSelector } from "@rbxts/react-reflex";
import Roact from "@rbxts/roact";
import { useAppProducer } from "../hooks/use-app-producer";
import { producer } from "../producer";
import { selectClientCount } from "../producer/counter.producer";

function Counter() {
	const { increment, decrement } = useAppProducer();

	const count = useSelector(selectClientCount);

	return (
		<textbutton
			Text={`Count: ${count}`}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(0, 100, 0, 50)}
			Event={{
				Activated: () => increment(),
				MouseButton2Click: () => decrement(),
			}}
		/>
	);
}

export = (target: Frame) => {
	const tree = Roact.mount(
		<ReflexProvider producer={producer} initialState={{ counter: { count: 5 } }}>
			<Counter />
		</ReflexProvider>,
		target,
	);

	return () => {
		Roact.unmount(tree);
	};
};
