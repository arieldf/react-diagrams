/// <reference types="react" />
import { DiagramEngine, LinkModel, DefaultPortModel } from "../../src/main";
import { LinkFactory } from "../../src/AbstractFactory";
export declare class AdvancedLinkModel extends LinkModel {
    size: number;
    color: string;
    constructor();
}
export declare class AdvancedPortModel extends DefaultPortModel {
    constructor(isInput: boolean, name: string, label?: string, id?: string);
    createLinkModel(): LinkModel | null;
}
export declare class AdvancedLinkWidgetFactory extends LinkFactory<AdvancedLinkModel> {
    getNewInstance(initialConfig?: any): AdvancedLinkModel;
    constructor();
    generateReactWidget(diagramEngine: DiagramEngine, link: AdvancedLinkModel): JSX.Element;
}
declare const _default: () => JSX.Element;
export default _default;
