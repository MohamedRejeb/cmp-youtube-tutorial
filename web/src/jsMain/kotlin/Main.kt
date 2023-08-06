import androidx.compose.ui.window.Window
import com.mohamedrejeb.kmp.app.common.App
import org.jetbrains.skiko.wasm.onWasmReady

fun main() {
    onWasmReady {
        Window("KmpApp") {
            App()
        }
    }
}