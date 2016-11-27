/// <amd-module name="TestCase"/>

export interface TestCase {

    prepare?(): void;

    run(): void;

    clean?(): void;

    count: number;
}
